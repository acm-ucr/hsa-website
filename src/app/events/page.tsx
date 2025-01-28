import Banquet from "@/components/events/Banquet";
import FriendshipGames from "@/components/events/Friendship-games";
import HmongNewYear from "@/components/events/HmongNewYear";
import Header from "@/components/Header";

const Page = () => {
  return (
    <>
      <Header title="Events" />
      <div className="grid grid-cols-3">
        <div className="col-start-2 mb-5">
          <FriendshipGames
            title="Friendship Games"
            location="SSC MPR 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna."
          />
        </div>
        <div className="col-start-2 mb-5">
          <Banquet
            title="Banquet"
            location="SSC MPR 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna."
          />
        </div>
        <div className="col-start-2 mb-5">
          <HmongNewYear
            title="Hmong New Year"
            location="SSC MPR 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna."
          />
        </div>
      </div>
    </>
  );
};

export default Page;
