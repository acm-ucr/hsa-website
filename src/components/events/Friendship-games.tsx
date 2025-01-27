import EventCardBase from "./EventCardBase";

const FriendshipGames = (props: {
  title: string;
  location: string;
  description: string;
}) => {
  return (
    <EventCardBase
      title={props.title}
      location={props.location}
      description={props.description}
    />
  );
};

export default FriendshipGames;
