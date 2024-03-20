import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
// import { Button } from "antd";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  // 派发异步事件
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <ul className="room-list">
            {goodPriceInfo?.list?.map((item, index) => {
              return <RoomItem key={item.id} itemData={item} />;
            })}
          </ul>
        </div>
      </div>
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
      <Rating name="read-only" value={3.5} precision={0.5} readOnly />
    </HomeWrapper>
  );
});

export default Home;
