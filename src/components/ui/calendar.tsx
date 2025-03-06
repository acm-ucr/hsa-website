"use client";

import * as React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

export type GoogleEventProps = {
  start: {
    dateTime: Date;
  };
  end: {
    dateTime: Date;
  };
  location: string;
  description: string;
  summary: string;
};

export type EventProps = Partial<{
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
}>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
}

const Day = ({ date, displayMonth, events, setCurrent }: DayProps) => {
  const currentMonth = displayMonth.getMonth() === date.getMonth();

  return (
    <div
      className={`${currentMonth ? "text-hsa-gray-300" : "text-hsa-gray-200"} scrollbar-hidden h-24 overflow-y-scroll border`}
    >
      <p className="text-md sticky px-2 text-right font-songMyung">
        {date.getDate()}
      </p>

      {events?.map(({ title, start, end, location, description }, index) => {
        const startDate = new Date(start as string);

        if (
          startDate.getDate() === date.getDate() &&
          startDate.getMonth() === date.getMonth() &&
          startDate.getFullYear() === date.getFullYear()
        ) {
          return (
            <div
              className="my-1 cursor-pointer text-ellipsis bg-hsa-blue-100 bg-opacity-75 p-1 text-center font-songMyung text-hsa-tan-100 hover:bg-opacity-100"
              key={index}
              onClick={() =>
                setCurrent({ title, start, end, location, description })
              }
            >
              {startDate.getHours() < 12
                ? (startDate.getHours() % 12) + "am"
                : (startDate.getHours() % 12) + "pm"}{" "}
              {title}
            </div>
          );
        }
      })}
    </div>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  events,
  setCurrent,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("rounded-none border-none bg-hsa-gray-100 p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-2/3 flex justify-center flex-col mx-auto",
        caption: "flex justify-center p-1 relative items-center",
        caption_label:
          "text-md font-bold text-hsa-gray-300 font-songMyung text-xl",
        nav: "space-x-1 flex items-center",
        nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        nav_button_previous: "absolute left-1/3",
        nav_button_next: "absolute right-1/3",
        table: "w-full border-collapse space-y-1",
        head_row: "flex h-14",
        head_cell:
          "justify-center w-full font-songMyung text-md content-center uppercase border text-[#EFEFEF] bg-hsa-pink-200 bg-opacity-100", //this is so scuffed but for some reason text-hsa-gray-100 doesnt work
        row: "flex w-full",
        cell: "w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-full p-0 font-songMyung aria-selected:opacity-100 rounded-none border",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "font-songMyung bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground border-none",
        day_today: "bg-accent text-accent-foreground font-songMyung",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground font-songMyung",
        day_disabled: "text-hsa-gray-300 opacity-50 font-songMyung",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-hsa-gray-300 font-songMyung",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <MoveLeft
            className={cn(
              "h-5 w-5 font-songMyung text-hsa-gray-300",
              className,
            )}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <MoveRight
            className={cn(
              "h-5 w-5 font-songMyung text-hsa-gray-300",
              className,
            )}
            {...props}
          />
        ),
        Day: ({ displayMonth, date }) => (
          <Day
            date={date}
            displayMonth={displayMonth}
            events={events}
            setCurrent={setCurrent}
          />
        ),
      }}
      formatters={{
        formatWeekdayName: (weekday) =>
          weekday.toLocaleDateString("en-US", { weekday: "short" }),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
