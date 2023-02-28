import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-top: 48px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
  }
`;

const homeHeader = () => {
  return (
    <StyledWrapper>
      <img src="/images/vending-machine-icon.png" alt="vending machine icon" />
    </StyledWrapper>
  );
};

export default homeHeader;
