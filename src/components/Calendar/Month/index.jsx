import React from 'react';
import Week from './../Week';
import style from './../Calendar.module.scss';

function Month(props) {
  var result = getMonth(new Date(2012, 1, 29));
  return (
    <table>
      <thead>
        <h1>result</h1>
        <caption className={style.dhead}>JULE 2020</caption>
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
