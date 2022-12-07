import PropTypes from "prop-types"

const Circle = ({ size, color }: { size: any; color: string }) => {
  return (
    <div>
      <svg height={size} width={size} fill={color}>
        <circle r={size / 2} cx={size / 2} cy={size / 2} />
      </svg>
    </div>
  );
};

Circle.propTypes = {
  size: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
};

export default Circle