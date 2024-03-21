import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;

  const tabNames = infoData?.dest_address?.map((item) => item.name);

  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);

  const tabClickHandle = useCallback((index, name) => {
    setName(name);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
      <SectionTabs tabClick={tabClickHandle} tabNames={tabNames} />
      <SectionRooms roomList={infoData?.dest_list?.[name]} itemWidth="33.33%" />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;