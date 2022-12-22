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
