import PropTypes from "prop-types";

const InputColor = ({
  label,
  color,
  onChange,
}: {
  label: string;
  color: any;
  onChange: any;
}) => {
  return (
    <div>
      <label htmlFor="shapeColor">{label}:</label>
      <input
        id="shapeColor"
        name="shapeColor"
        type="color"
        value={color}
        style={{ width: "40px" }}
        onChange={onChange}
      />
    </div>
  );
};

InputColor.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputColor;
