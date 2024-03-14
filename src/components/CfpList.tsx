import React, { Fragment, useState } from "react";
import CfpCard from "./CfpCard";
import cfps from "@content/cfps";

export default function CfpList() {
  const [list, setList] = useState(cfps);

  const handleFilter = () => {
    const sixMonths = new Date();
    sixMonths.setMonth(sixMonths.getMonth() + 6);
    const sixthMonth = sixMonths.toLocaleString("en-US", {
      month: "long",
    });
    const sevenMonths = new Date();
    sixMonths.setMonth(sevenMonths.getMonth() + 7);
    const seventMonth = sixMonths.toLocaleString("en-US", {
      month: "long",
    });
    const filteredList = cfps.filter(
      cfp => cfp.month === sixthMonth || cfp.month === seventMonth
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
