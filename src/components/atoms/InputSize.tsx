import PropTypes from "prop-types";

const InputSize = ({
  id,
  size,
  onChange,
}: {
  id: any,
  size: any;
  onChange: any;
}) => {
  return (
    <>
      
      <input
        id={id}
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
  id: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default InputSize