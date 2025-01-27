import Banquet from "@/components/events/Banquet";
import FriendshipGames from "@/components/events/Friendship-games";
import HmongNewYear from "@/components/events/HmongNewYear";
import Header from "@/components/Header";

const Page = () => {
  return (
    <>
      <Header />
      <FriendshipGames
        title="Friendship Games"
        location="SSC MPR 2"
        description="Lorem ipsum."
      />
      <Banquet />
      <HmongNewYear />
    </>
  );
};

export default Page;
