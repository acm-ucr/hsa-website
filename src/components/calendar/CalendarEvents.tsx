"use client";

import {
  Calendar,
  EventProps,
  GoogleEventProps,
} from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EventCard from "./EventCard";

const Events = () => {
  const [current, setCurrent] = useState<EventProps>({});
  const today = new Date();
  const timeMin = new Date(
    today.getTime() - 60 * 60 * 24 * 7 * 5 * 1000,
  ).toISOString();
  const timeMax = new Date(
    today.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
  ).toISOString();
  today.setHours(0, 0, 0, 0);

  const { isPending, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
            timeMin,
          )}&timeMax=${encodeURIComponent(timeMax)}`).then((res) => res.json());

      const events = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: start.dateTime,
          end: end.dateTime,
          location,
          description,
          title: summary,
        }),
      );
      return events;
    },
  });

  return (
    <>
      {!isPending && (
        <Dialog
          open={Object.keys(current).length > 0}
          onOpenChange={() => setCurrent({})}
        >
          <DialogContent className="border-4 border-hsa-blue-100 p-8">
            <DialogHeader>
              <DialogTitle>
                <p className="text-4xl font-medium">{current.title}</p>
                <p className="my-2 flex flex-col gap-1 font-openSans text-base">
                  <p>Location: {current.location}</p>
                  <p>
                    Time:{" "}
                    {new Date(current.start as string).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}{" "}
                    to{" "}
                    {new Date(current.end as string).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}
                  </p>
                </p>
              </DialogTitle>
              <DialogDescription className="relative font-openSans text-black">
                {current.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
      <div className="mx-2 my-6 mr-4">
        {isPending ? (
          <div className="mx-auto my-32 w-full text-center font-songMyung text-4xl">
            Loading upcoming events...
          </div>
        ) : (
          <>
            {data && data.size > 0 ? (
              data
                ?.slice(0, 2)
                .map((event: EventProps, index: number) => (
                  <EventCard
                    key={index}
                    start={event.start}
                    end={event.end}
                    location={event.location}
                    description={event.description}
                    title={event.title}
                  />
                ))
            ) : (
              <div className="mx-auto my-32 w-full text-center font-songMyung text-4xl">
                No upcoming events!
              </div>
            )}
          </>
        )}
      </div>
      <div className="mx-auto my-4 flex w-full bg-hsa-tan-200 pb-12 pt-4">
        <Calendar
          mode="single"
          selected={new Date()}
          className="mx-auto w-full"
          events={data}
          setCurrent={setCurrent}
        />
      </div>
    </>
  );
};

export default Events;
