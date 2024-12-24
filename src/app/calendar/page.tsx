import CalendarEvents from "@/components/calendar/CalendarEvents";
import EventCard from "@/components/calendar/EventCard";
import Header from "@/components/Header"

const Page = () => {
  return (
    <>
      <Header />
      <EventCard />
      <CalendarEvents />
    </>
  )
}

export default Page;