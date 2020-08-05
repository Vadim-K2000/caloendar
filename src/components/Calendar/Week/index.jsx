import React from "react";
import Date from "./../Date"

function Week() {
  return (
    <tr>
      <Date date={1} className={'day'}/>
      <Date date={2} />
      <Date date={3} />
      <Date date={4} />
      <Date date={5} />
      <Date date={6} />
      <Date date={7} />
    </tr>
  );
}

export default Week;
