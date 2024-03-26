import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { useRef } from "react";

const RoomItem = memo((props) => {
  const sliderRef = useRef();
  const { itemData, itemWidth = "25%" } = props;
  function controlClickHandle(isRight) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
  }
  return (
    <RoomWrapper
      $itemWidth={itemWidth}
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
    >
      <div className="inner">
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className="swiper">
          <div className="control">
            <div
              className="btn left"
              onClick={(e) => controlClickHandle(false)}
            >
              <IconArrowLeft width="20" height="20" />
            </div>
            <div
              className="btn right"
              onClick={(e) => controlClickHandle(true)}
            >
              <IconArrowRight width="20" height="20" />
            </div>
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
