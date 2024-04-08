import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  /* position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999; */

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    left: 0;
  }
`;
