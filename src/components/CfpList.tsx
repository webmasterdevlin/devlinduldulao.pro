import React, { Fragment, useState } from "react";
import CfpCard from "./CfpCard";
import cfps from "@content/cfps";
import getMonthsFromNow from "@utils/getMonthsFromNow";

export default function CfpList() {
  const [list, setList] = useState(cfps);

  const handleFilter = () => {
    const fifthMonth = getMonthsFromNow(5);
    const sixthMonth = getMonthsFromNow(6);
    const seventMonth = getMonthsFromNow(7);
    const filteredList = cfps.filter(
      cfp =>
        cfp.month === fifthMonth ||
        cfp.month === sixthMonth ||
        cfp.month === seventMonth
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
              <CfpCard {...cfp} />
            </Fragment>
          );
        })}
    </>
  );
}
