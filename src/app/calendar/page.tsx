import CalendarEvents from "@/components/calendar/CalendarEvents";
import EventCard from "@/components/calendar/EventCard";
import Header from "@/components/Header";
import eventCardData from "@/data/EventCardData";

const Page = () => {
  return (
    <>
      <Header title="Calendar" />
      <div className="my-6">
        {eventCardData.map((event, index) => (
          <EventCard key={index} data={event} />
        ))}
      </div>
      <div className="bg-hsa-tan-200 mb-8">
        <CalendarEvents />
      </div>
    </>
  );
};

export default Page;
