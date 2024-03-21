import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  const { tabNames = [] } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function itemClickHandle(index) {
    setCurrentIndex(index);
  }
  return (
    <TabsWrapper>
      {tabNames?.map((item, index) => {
        return (
          <div
            onClick={(e) => itemClickHandle(index)}
            className={classNames("item", { active: currentIndex === index })}
            key={item}
          >
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
