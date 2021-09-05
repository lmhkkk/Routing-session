import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

  const{label,color,type,onClick} = props;
  return (
    <button
    type ={type}
    className={`btn btn-${color} search__btn`}
    onClick={onClick}
    >
      {label}
    </button>
  );
};
//giá trị mặc định 
Button.defaultProps = {
  color: "secondary",
  label: "Button",
  type:  "button",

}
Button.propTypes ={
  onClick: PropTypes.func,
  color: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Button;