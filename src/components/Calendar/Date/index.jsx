import React from 'react';
import PropTypes from 'prop-types';
import style from './../Calendar.module.scss';

function Date(props) {
  const { date, isCurrent } = props;
  return <td className={style.day}>{date}</td>;
}

Date.propTypes = {
  date: PropTypes.instanceOf('Date'),
  isCurrent: PropTypes.bool,
};

export default Date;
