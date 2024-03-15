import React, { Fragment, useState } from "react";
import cfps from "@content/cfps";
import getMonthsFromNow from "@utils/getMonthsFromNow";
import { cn } from "@utils/style";

const fourthMonth = getMonthsFromNow(4);
const fifthMonth = getMonthsFromNow(5);
const sixthMonth = getMonthsFromNow(6);

export default function CfpList() {
  const [list, setList] = useState(cfps);

  const handleFilter = () => {
    const filteredList = cfps.filter(
      cfp =>
        cfp.month === fourthMonth ||
        cfp.month === fifthMonth ||
        cfp.month === sixthMonth
    );
    setList(filteredList);
  };

  const handleNoFilter = () => {
    setList(cfps);
  };

  return (
    <>
      <h2>List of conferences for CFPs</h2>
      <button
        className="w-full rounded-md py-2 font-medium"
        onClick={handleFilter}
      >
        Show possible open CFPs
      </button>
      <button
        className="w-full rounded-md py-2 font-medium"
        onClick={handleNoFilter}
      >
        Show all conferences
      </button>
      {list
        .sort((a, b) => {
          const monthOrder = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
        })
        .map(cfp => {
          return (
            <Fragment key={cfp.url}>
              <div
                className={cn(
                  (cfp.month === fourthMonth ||
                    cfp.month === fifthMonth ||
                    cfp.month === sixthMonth) &&
                    "animate-pulse",
                  "bg-white dark:bg-gray-800 mb-5 rounded-lg p-5 shadow-lg"
                )}
              >
                <h3 className="text-cyan-600 dark:text-cyan-400 text-lg font-semibold">
                  {cfp.location}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {cfp.month}
                </p>
                <a
                  href={cfp.url}
                  target="_blank"
                  className={cn("text-cyan-600 ")}
                >
                  {cfp.url}
                </a>
              </div>
            </Fragment>
          );
        })}
    </>
  );
}
