import styled from "styled-components";

export const RoomsWrapper = styled.div`
  padding: 40px 20px;
  position: relative;

  .title {
    color: #222;
    font-weight: 700;
    font-size: 22px;
    padding: 40px 0 10px 0;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .modal {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
  }
`;
