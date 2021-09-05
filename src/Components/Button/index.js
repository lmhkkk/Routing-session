import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

  const{label,color,type,onClick, margin,additional} = props;
  return (
    <button
    type ={type}
    className={`btn btn-${color} search__btn ${margin}`}
    onClick={onClick}
    >
      {additional} {label}
    </button>
  );
};
//giá trị mặc định 
Button.defaultProps = {
  color: "secondary",
  label: "Button",
  type:  "button",
  margin: "mt-2",
  additional:<i />,
}
Button.propTypes ={
  onClick: PropTypes.func,
  color: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  margin: PropTypes.string,
  additional: PropTypes.element,
}

export default Button;