import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { RoomWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { useRef } from "react";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const sliderRef = useRef();
  const { itemData, itemWidth = "25%", itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  function controlClickHandle(isRight) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
    //最新索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) {
      newIndex = itemData.picture_urls.length - 1;
    }
    if (newIndex > itemData.picture_urls.length - 1) {
      newIndex = 0;
    }
    setSelectIndex(newIndex);
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData);
  }

  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const swiperElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false)}>
          <IconArrowLeft width="20" height="20" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true)}>
          <IconArrowRight width="20" height="20" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div key={index} className="dot-item">
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <RoomWrapper
      $itemWidth={itemWidth}
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData?.picture_urls ? swiperElement : pictureElement}
        <div className="desc">{itemData?.verify_info?.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
      </div>
      <div className="bottom">
        <Rating
          value={itemData.star_rating ?? 4.5}
          precision={0.1}
          readOnly
          sx={{ fontSize: "10px", color: "#00848a" }}
        />
        <span className="count">{itemData?.reviews_count}</span>
        {itemData?.bottom_info?.content && (
          <span className="extra">· {itemData?.bottom_info?.content}</span>
        )}
      </div>
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
