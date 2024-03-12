import type { Cfp } from "@content/cfps";

type CfpCardProps = Cfp;

const CfpCard = ({ location, month, url }: CfpCardProps) => (
  <div className="bg-white dark:bg-gray-800 mb-5 rounded-lg p-5 shadow-lg">
    <h3 className="text-cyan-600 dark:text-cyan-400 text-lg font-semibold">
      {location}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{month}</p>
    <a
      href={url}
      target="_blank"
      className="text-cyan-600 dark:text-cyan-400 hover:underline"
    >
      {url}
    </a>
  </div>
);

export default CfpCard;
