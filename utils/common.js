import styled from "styled-components";


export const SubHead = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 45px;
  overflow: hidden;
  margin-bottom: 45px;
  @media screen and (min-width: 768px) {
    align-items: flex-end;
    flex-direction: row;
    margin-bottom: 130px;
  }
  @media screen and (min-width: 1224px) {
    margin-bottom: 200px;
  }
`;

export const BackCatalogue = styled.ul`
  margin-top: 22px;
  padding: 0 34px;
  & li {
    font-family: "Manrope";
    font-weight: 800;
    text-transform: uppercase;
    color: #785436;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    @media screen and (min-width: 1224px) {
      font-size: 20px;
      line-height: 28px;
    }
  }
  @media screen and (min-width: 576px) {
    padding: 0 54px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 68px;
  }
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
  column-gap: 30px;
  padding: 6px 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
  @media screen and (min-width: 992px) {
    column-gap: 80px;
    overflow-y: none;
    width: auto;
    column-gap: 40px;
    max-width: 440px;
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

export const Title = styled.h1`
  position: relative;
  font-weight: 800;
  font-size: max(11.5vw, 38px);
  text-transform: uppercase;
  color: #6c5347;
  padding: 0 26px;
  &::before {
    position: absolute;
    top: -10px;
    font-size: max(2vw, 12px);
    line-height: 11px;
    letter-spacing: 0.05em;
    color: #d9a672;
    @media screen and (min-width: 1224px) {
      top: -30px;
      font-size: 24px;
      line-height: 33px;
    }
  }
  @media screen and (min-width: 1224px) {
    font-size: 110px;
    line-height: 151px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #785436;
  max-width: 1200px;
  text-align: start;
  padding: 24px 26px 48px;
  @media screen and (min-width: 1224px) {
    font-size: 20px;
    line-height: 26px;
    margin-right: 30px;
  }
`;
