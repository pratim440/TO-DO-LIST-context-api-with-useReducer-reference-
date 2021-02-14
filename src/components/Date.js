import React, { useState } from "react";
import "./../css/Date.css";

function DateTime() {
  const monthNames = [
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
  const [d, setDate] = useState(new Date());

  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="date flex">
      <h2>
        {date}, {monthNames[month]}, {year}
      </h2>
    </div>
  );
}

export default DateTime;
