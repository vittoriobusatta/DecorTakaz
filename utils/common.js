import styled from "styled-components";

export const Contenthead = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    position: relative;
    font-family: "Manrope";
    font-weight: 800;
    font-size: 48px;
    text-transform: uppercase;
    color: #6c5347;
    @media screen and (min-width: 1224px) {
      font-size: 110px;
    }
    &::before {
      position: absolute;
      top: -20px;
      left: 0;
      font-family: "Manrope";
      font-weight: 800;
      font-size: 14px;
      line-height: 33px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #d9a672;
      @media screen and (min-width: 1224px) {
        font-size: 24px;
        top: 0px;
      }
    }
  }
`;

export const Filter = styled.ul`
  background-color: #e1d2c1;
  display: inline-flex;
  column-gap: 40px;
  padding: 6px 20px;
  cursor: grab;
  width: 100%;

  @media screen and (min-width: 1224px) {
    column-gap: 80px;
    overflow-y: none;
    width: auto;
  }
  li {
    background: none;
    font-family: "Manrope";
    font-weight: 800;
    font-size: 16px;
    line-height: 28px;
    text-transform: uppercase;
    color: #785436;
  }
`;
