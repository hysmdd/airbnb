import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();

  useEffect(() => {
    // 获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;
    // 获取content的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    // 获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    // 特殊情况处理
    // 左侧特殊情况处理
    if (distance < 0) {
      distance = 0;
    }
    // 右侧特殊情况处理
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) {
      distance = totalDistance;
    }
    // 改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {};

export default Indicator;
