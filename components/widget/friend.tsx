import { FriendStruct, Friends } from "@/config/friends";
import useSWRImmutable from "swr/immutable";
import Image from "next/image";

const previewFetcher = (url: string) =>
  fetch(`/api/bookmark/${encodeURIComponent(url)}`).then((res) => res.json());

enum Status {
  online,
  offline,
  loading,
}

const FriendCard: React.FC<FriendStruct> = (friend) => {
  const { data, error } = useSWRImmutable(friend.url, previewFetcher);
  const friendCard = (status: Status) => {
    let card: JSX.Element;
    if (status === Status.online) {
      card = <div className="rounded-full bg-green-500 h-2 w-2"></div>;
    } else if (status === Status.loading) {
      card = <div className="rounded-full bg-yellow-500 h-2 w-2"></div>;
    } else {
      card = <div className="rounded-full bg-red-500 h-2 w-2"></div>;
    }

    return (
      <span className="flex items-center py-1 px-3 m-2 border-2 hover:rounded-md hover:scale-15 border-white hover:border-gray-100 dark:border-gray-900 dark:hover:border-gray-600">
        <div className="basis-1/6 flex items-center justify-center">
          <div className="relative rounded-full overflow-hidden h-10 w-10">
            <Image fill={true} src={friend.imgUrl} alt={friend.url} />
          </div>
        </div>
        <div className="basis-2/3 truncate ...">
          <a href={friend.url} className="px-3" key={friend.name}>
            {friend.name}
          </a>
        </div>
        <div className="basis-1/6 flex justify-center">{card}</div>
      </span>
    );
  };

  if (error) {
    return friendCard(Status.offline);
  }
  if (!data) {
    return friendCard(Status.loading);
  }

  return friendCard(Status.online);
};

const Friend = () => {
  return (
    <>
      {Friends.length > 0 && (
        <div className="py-2 w-60">
          {Friends.map((frined) => (
            <FriendCard key={frined.name} {...frined} />
          ))}
        </div>
      )}
    </>
  );
};

export default Friend;
