"use client";

import * as React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import * as motion from "motion/react-client";

const slideUp = {
  hidden: { opacity: 0, y: 5 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const slideDown = {
  hidden: { opacity: 0, y: -5 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const transition = {
  duration: 0.3,
};

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
  const today = new Date();
  const isToday =
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();
  const currentMonth = displayMonth.getMonth() === date.getMonth();
  const filteredEvents = events?.filter(({ start, end }) => {
    if (!start || !end) return false;
    const eventStartDate = new Date(start);
    const eventEndDate = new Date(end);

    eventStartDate.setHours(0, 0, 0, 0);
    eventEndDate.setHours(23, 59, 59, 999);

    return (
      date >= eventStartDate && date <= eventEndDate && eventEndDate >= today
    );
  });

  return (
    <motion.div
      variants={slideDown}
      transition={{ ...transition, delay: 0.2 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`${isToday ? "bg-hsa-blue-200" : currentMonth ? "bg-white" : "bg-hsa-pink-100"} scrollbar-hidden flex h-28 w-full flex-col overflow-y-scroll p-0.5`}
    >
      <p
        className={`${currentMonth ? "" : "opacity-80"} ${isToday && "font-bold text-white"} text-fit sticky m-1 px-1 text-center font-songMyung md:text-left md:text-xl`}
      >
        {date.getDate()}
      </p>

      {filteredEvents?.map(
        ({ title, start, end, location, description }, index) => {
          const startDate = new Date(start as string);

          if (
            startDate.getDate() === date.getDate() &&
            startDate.getMonth() === date.getMonth() &&
            startDate.getFullYear() === date.getFullYear()
          ) {
            return (
              <motion.div
                variants={slideUp}
                transition={{ ...transition, delay: 0.2 }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className={`${isToday ? "bg-white text-hsa-blue-200" : "bg-hsa-blue-200 text-white"} mb-0.5 flex w-full cursor-pointer p-1 text-center font-medium transition hover:bg-opacity-100 hover:opacity-60`}
                key={index}
                onClick={() =>
                  setCurrent({ title, start, end, location, description })
                }
              >
                <span className="my-auto h-5 w-full truncate text-sm">
                  {title}
                </span>
              </motion.div>
            );
          }
        },
      )}
    </motion.div>
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
      className={cn("rounded-none border-none", className)}
      classNames={{
        months:
          "w-full flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month:
          "space-y-4 w-2/3 flex justify-center flex-col px-4 md:px-0 mx-auto overflow-x-auto",
        caption: "flex justify-center p-1 relative items-center",
        caption_label: "font-bold text-hsa-gray-300 font-songMyung text-2xl",
        nav: "space-x-1 flex items-center",
        nav_button: "h-7 w-7 bg-transparent p-0 hover:opacity-50",
        nav_button_previous: "absolute md:left-1/3 left-0",
        nav_button_next: "absolute md:right-1/3 right-0",
        table: "w-full border-collapse space-y-1",
        head_row: "flex h-14 ",
        head_cell:
          "w-full text-sm justify-center text-muted-foreground w-full font-songMyung md:text-lg font-light content-center uppercase border-none m-[1px] md:m-0.5 text-white bg-hsa-pink-200 bg-opacity-100",
        row: "flex w-full",
        cell: "w-full m-[1px] md:m-0.5 flex border-none text-fit md:text-xl p-0 overflow-hidden relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "font-songMyung aria-selected:opacity-100 border-none rounded-none",
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
            className={cn("h-8 w-8 text-black", className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <MoveRight
            className={cn("h-8 w-8 text-black", className)}
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
