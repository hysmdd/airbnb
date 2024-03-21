import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;

  .info {
    cursor: pointer;
    display: flex;
    align-items: center;

    font-size: 17px;
    font-weight: bold;
    color: ${(props) => props.color};

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`;
