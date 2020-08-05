import React from "react";
import Week from "./../Week";


function Month(props) {
  return (
    <table>
      <thead>
        <caption>JULE 2020</caption>
        <tr>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody>
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
      </tbody>
    </table>
  );
}

export default Month;
