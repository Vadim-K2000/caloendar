import React, { PureComponent } from "react";
import * as dateFns from "date-fns";
import styles from "./Calendar.module.scss";
import Month from "./Month";

function Calendar() {
  return (
    <div>
      <Month />
    </div>
  );
}

export default Calendar;
