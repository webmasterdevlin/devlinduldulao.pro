import React, { Fragment, useState } from "react";
import cfps from "@content/cfps";
import getMonthsFromNow from "@utils/getMonthsFromNow";
import { cn } from "@utils/style";

const fourthMonth = getMonthsFromNow(4);
const fifthMonth = getMonthsFromNow(5);
const sixthMonth = getMonthsFromNow(6);
const seventhMonth = getMonthsFromNow(7);

export default function CfpList() {
  const [list, setList] = useState(cfps);

  const handleFilter = () => {
    const filteredList = cfps.filter(
      cfp =>
        cfp.month === fourthMonth ||
        cfp.month === fifthMonth ||
        cfp.month === sixthMonth ||
        cfp.month === seventhMonth
    );
    setList(filteredList);
  };

  const handleNoFilter = () => {
    setList(cfps);
  };

  return (
    <>
      <section className="my-4 flex flex-wrap gap-2">
        <button
          className="hover:text-white w-full rounded-md py-2 font-medium transition-colors duration-300 ease-in-out hover:bg-skin-accent"
          onClick={handleFilter}
        >
          Show possible open CFPs
        </button>
        <button
          className="hover:text-white w-full rounded-md py-2 font-medium transition-colors duration-300 ease-in-out hover:bg-skin-accent"
          onClick={handleNoFilter}
        >
          Show all conferences
        </button>
      </section>
      {/* sort by month and ascebding alphabetical order of the location */}
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
        .sort((a, b) => a.location.localeCompare(b.location))
        .map(cfp => {
          return (
            <div
              key={cfp.url}
              className={cn(
                (cfp.month === fourthMonth ||
                  cfp.month === fifthMonth ||
                  cfp.month === sixthMonth ||
                  cfp.month === seventhMonth) &&
                  "animate-pulse",
                "bg-white dark:bg-gray-800 mb-5 rounded-lg p-5 shadow-lg"
              )}
            >
              <h3 className="text-cyan-600 dark:text-cyan-400 text-lg font-semibold">
                {cfp.location}
              </h3>
              <p
                className={cn(
                  (cfp.month === fourthMonth ||
                    cfp.month === fifthMonth ||
                    cfp.month === sixthMonth ||
                    cfp.month === seventhMonth) &&
                    "text-skin-accent",
                  "text-lg font-medium decoration-dashed underline-offset-4"
                )}
              >
                {cfp.month}
              </p>
              <a
                href={cfp.url}
                target="_blank"
                className="text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-in-out hover:text-skin-accent"
              >
                <div>{cfp.url}</div>
                <div>
                  {(cfp.month === fourthMonth ||
                    cfp.month === fifthMonth ||
                    cfp.month === sixthMonth ||
                    cfp.month === seventhMonth) && (
                    <>
                      <span className="text-skin-accent"> ✔︎</span> see CFP
                      info
                    </>
                  )}
                </div>
              </a>
            </div>
          );
        })}
    </>
  );
}
