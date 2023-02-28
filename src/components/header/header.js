import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  .title-header {
    font-size: 36px;
    font-weight: bolder;
    text-align: center;
    background-color: #023e8a;
    border: 2px;
    padding: 24px;
    border-radius: 24px;
    color: white;
  }

  img {
    vertical-align: middle;
    width: 50px;
  }

  @media only screen and (max-width: 450px) {
    .title-header {
      font-size: 18px !important;
    }
  }
`;

const homeHeader = () => {
  return (
    <StyledWrapper>
      <span className="title-header">
        BLUE VENDING MACHINE{" "}
        <img src="/blueVendingIcon.png" alt="header-icon" />
      </span>
    </StyledWrapper>
  );
};

export default homeHeader;
