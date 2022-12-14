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
    padding: 0 54px;
    @media screen and (min-width: 992px) {
      padding: 0 82px;
    }
    @media screen and (min-width: 1224px) {
      font-size: 110px;
      padding: 0;
    }
    &::before {
      position: absolute;
      top: -20px;
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

export const SubHead = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 45px;
  overflow: hidden;
  margin-bottom: 45px;
  @media screen and (min-width: 992px) {
    align-items: flex-end;
    flex-direction: row;
  }
  @media screen and (min-width: 1224px) {
    margin-bottom: 200px;
  }
`;

export const BackCatalogue = styled.ul`
  margin-top: 22px;
  padding: 0 54px;
  @media screen and (min-width: 992px) {
    padding: 0 82px;
  }
  @media screen and (min-width: 1224px) {
    margin-top: 50px;
    padding: 0;
  }
`;

export const Filter = styled.ul`
  background-color: #e1d2c1;
  display: inline-flex;
  column-gap: 40px;
  padding: 6px 20px;
  width: 100%;
  @media screen and (min-width: 992px) {
    column-gap: 80px;
    overflow-y: none;
    width: auto;
  }
  button {
    background: none;
    font-family: "Manrope";
    font-weight: 800;
    font-size: 16px;
    line-height: 28px;
    text-transform: uppercase;
    color: #785436;
    white-space: nowrap;
    cursor: pointer;
  }
`;
