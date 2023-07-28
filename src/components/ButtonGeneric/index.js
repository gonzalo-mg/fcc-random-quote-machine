/* 
generic multipurpose button
*/
import "./index.css";
import PropTypes from "prop-types";

export const ButtonGeneric = ({
  type = "button",
  id,
  text,
  className2,
  onClickFunction,
}) => {
  return (
    <button
      type={type}
      id={id}
      className={`ButtonGeneric ${className2}`}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
};

ButtonGeneric.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  className2: PropTypes.string,
  onClickFunction: PropTypes.func,
};