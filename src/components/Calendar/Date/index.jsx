import React from "react";
import PropTypes from "prop-types";

function Date(props) {
  const { date, isCurrent, className } = props;
  return <td class={props.className}>{date}</td>;
}

Date.propTypes = {
  date: PropTypes.instanceOf("Date"),
  isCurrent: PropTypes.bool,
  className: PropTypes.string,
};

export default Date;
