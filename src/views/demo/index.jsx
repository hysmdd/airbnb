import Indicator from "@/base-ui/indicator";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo(() => {
  const [selectIndex, setSelectIndex] = useState(0);

  const names = ["林默", "ivy", "小爱", "秦风", "唐仁", "kiko", "杰克贾"];

  function toggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) {
      newIndex = names.length - 1;
    }
    if (newIndex > names.length - 1) {
      newIndex = 0;
    }
    setSelectIndex(newIndex);
  }

  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => toggleClickHandle(false)}>上一个</button>
        <button onClick={(e) => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
