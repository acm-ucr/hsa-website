import EventCardBase from "@/components/events/EventCardBase";
import Header from "@/components/Header";

const Page = () => {
  return (
    <>
      <Header title="Events" />
      <div>
        <EventCardBase
          title="Friendship Games"
          shortDescription="The UCR Hmong Student Association (HSA) hosted an event called Friendship Games, partnering with Hmong student associations from other UC schools."
          longDescription="The event brought together Hmong students from different campuses, as well as high school students and their families, to participate in icebreakers and games. These activities were designed to strengthen bonds and foster new friendships, while also providing an opportunity for students to connect with their peers and build relationships across Hmong communities. It was a fun and meaningful way to create lasting connections and further develop ties between our sister HSAs."
          imageURL="/events/friendship-games.png"
        />
        <EventCardBase
          title="Annual Spring Time Banquet"
          shortDescription="The Annual Spring Banquet is a celebratory event that honors past, present, and future members of the Hmong Student Association with our sister organizations and Hmong Community."
          longDescription="The event brings together the HSA members to celebrate the achievements accomplished. This annual spring time banquet is a time to reflect on our memorable experiences throughout the year, appreciate our growth and achievements with one another. "
          imageURL="/events/spring-banquet.png"
        />
        <EventCardBase
          title="Long Beach Hmong New Years"
          shortDescription="Long Beach Hmong New Year as well as Fresno Hmong New Year are two festivals with amazing food, games, and entertainment. This is where families and friends dress up, come together, and meet new people to welcome the New Year."
          longDescription="HSA UCR has had the great opportunity in tabling at Long Beach Hmong New Year to increase support and awareness of our Hmong club at UCR. Attending these special occasions also allows us to contribute towards our inspiring community. "
          imageURL="/events/new-years.png"
        />
      </div>
    </>
  );
};

export default Page;
