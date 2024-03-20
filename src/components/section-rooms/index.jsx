import PropTypes from "prop-types";
import React, { memo } from "react";

const SectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return <div>SectionRooms</div>;
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
