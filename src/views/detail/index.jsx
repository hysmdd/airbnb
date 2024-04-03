import React, { memo } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./c-cpns/detail-pictures";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPictures />
    </DetailWrapper>
  );
});

export default Detail;
