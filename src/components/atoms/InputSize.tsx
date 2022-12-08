import PropTypes from "prop-types";

const InputSize = ({
  label,
  size,
  onChange,
}: {
  label: any;
  size: any;
  onChange: any;
}) => {
  return (
    <>
      <label htmlFor="shapeSize">{label}:</label>
      <input
        id="shapeSize"
        name="shapeSize"
        type="number"
        style={{ width: "42px" }}
        value={size}
        onChange={onChange}
      />
    </>
  );
};

InputSize.propTypes = {
  label: PropTypes.any.isRequired,
  size: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSize;
