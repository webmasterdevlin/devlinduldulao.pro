import shorterDomain from "@utils/shorterDomain";

type TalkCardProps = {
  event: string;
  date: string;
  location: string;
  title: string;
  url: string;
};

const TalkCard = ({ event, date, location, title, url }: TalkCardProps) => (
  <div className="bg-white dark:bg-gray-800 mb-5 rounded-lg p-5 shadow-lg">
    <h3 className="text-cyan-600 dark:text-cyan-400 text-lg font-semibold">
      {event}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{date}</p>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{location}</p>
    <h4 className="text-md mt-2 font-semibold">{title}</h4>
    <a
      href={url}
      target="_blank"
      className="text-cyan-600 dark:text-cyan-400 hover:underline"
    >
      {shorterDomain(url)}
    </a>
  </div>
);

export default TalkCard;
