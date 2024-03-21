import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function itemClickHandle(index, item) {
    setCurrentIndex(index);
    tabClick(index, item);
  }
  return (
    <TabsWrapper>
      {tabNames?.map((item, index) => {
        return (
          <div
            onClick={(e) => itemClickHandle(index, item)}
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
