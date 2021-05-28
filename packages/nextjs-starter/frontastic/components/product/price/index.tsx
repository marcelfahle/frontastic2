import PropTypes from "prop-types";

const Price = ({ value, className = "", currency: string = "EUR" }) => {
  return (
    <span className={`${className}`}>
      {(value / 100).toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
      })}
    </span>
  );
};
export default Price;
