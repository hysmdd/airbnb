import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );

  const tabNames = discountInfo?.dest_address?.map((item) => item.name);

  const [name, setName] = useState("佛山");
  // 派发异步事件
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  const tabClickHandle = useCallback((index, name) => {
    console.log(index, name);
    setName(name);
  }, []);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader
            title={discountInfo?.title}
            subtitle={discountInfo?.subtitle}
          />
          <SectionTabs tabClick={tabClickHandle} tabNames={tabNames} />
          <SectionRooms
            itemWidth="33.33%"
            roomList={discountInfo?.dest_list?.[name]}
          />
        </div>
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
