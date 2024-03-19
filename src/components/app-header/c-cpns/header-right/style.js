import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.text.primaryColor};

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    .btn {
      width: 36px;
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    display: flex;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;
  }
`;
