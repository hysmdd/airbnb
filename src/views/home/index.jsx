import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";

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
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
