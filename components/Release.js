import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  margin-top: 122px;
  & ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    width: 100%;
    margin-top: 60px;
    padding: 0 26px;
    @media screen and (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      padding: 0 80px;
      margin-top: 120px;
    }
    & li {
      height: 100%;
      width: 100%;
      background-color: #745033;
      height: 200px;
      &:hover {
        background-color: #906745;
        & svg path {
          fill: #ffd2a4;
        }
      }
      @media screen and (min-width: 1224px) {
        height: 260px;
        width: 24%;
      }
      &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
      }
      &:nth-child(2) {
        grid-area: 1 / 2 / 2 / 3;
      }
      &:nth-child(3) {
        grid-area: 2 / 1 / 3 / 2;
      }
      &:nth-child(4) {
        grid-area: 2 / 2 / 3 / 3;
      }
      & svg {
        height: 55px;
        width: auto;
        @media screen and (min-width: 576px) {
          height: 60px;
        }
        @media screen and (min-width: 768px) {
          height: 80px;
        }
        @media screen and (min-width: 1224px) {
          height: 100px;
        }
      }
      & a {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
        padding-top: 40px;
      }
      & p {
        font-family: "Manrope";
        font-weight: 600;
        font-size: 15px;
        line-height: 36px;
        text-transform: uppercase;
        color: #ede0d4;
        margin-top: 10px;
        letter-spacing: 0.03em;
        @media screen and (min-width: 576px) {
          font-size: 18px;
        }
        @media screen and (min-width: 1224px) {
          font-size: 24px;
          margin-top: 20px;
        }
      }
    }
  }
`;
const Content = styled.div`
  padding: 24px 26px;
  width: 100%;
  @media screen and (min-width: 1224px) {
    padding: 24px 120px;
  }
  & .about {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    @media screen and (min-width: 1224px) {
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
    }
    & div {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        & span {
          color: #d9a672;
        }
        & svg path {
          fill: #d9a672;
        }
      }
      & span {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 11px;
        text-transform: uppercase;
        color: #785436;
        margin-right: 10px;
        @media screen and (min-width: 1224px) {
          font-size: 20px;
          line-height: 30px;
          margin-right: 30px;
        }
      }
      & svg {
        height: 45px;
        width: auto;
        @media screen and (min-width: 1224px) {
          height: 50px;
        }
      }
    }
    & p {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: #785436;
      max-width: 750px;
      padding-bottom: 20px;
      text-align: start;
      @media screen and (min-width: 1224px) {
        font-size: 20px;
        line-height: 26px;
      }
    }
  }
  & h1 {
    position: relative;
    font-family: "Manrope";
    font-weight: 800;
    font-size: 42px;
    line-height: 52px;
    text-transform: uppercase;
    color: #6c5347;
    margin-bottom: 50px;
    @media screen and (min-width: 1224px) {
      font-size: 110px;
      line-height: 151px;
    }
    &::before {
      content: "Nos dernières";
      position: absolute;
      top: -15px;
      font-size: 10px;
      line-height: 11px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #d9a672;
      @media screen and (min-width: 1224px) {
        top: -25px;
        font-size: 24px;
        line-height: 33px;
      }
    }
  }
`;

function Release() {
  return (
    <Container>
      <Content>
        <h1>Réalisations</h1>
        <div className="about">
          <p>
            Fusce hendrerit gravida purus, porta aliquam tortor tempor
            efficitur. Suspendisse gravida lorem enim, bibendum ornare justo
            lacinia ut. Maecenas lacinia.nunc id faucibus vestibulum, nibh odio
            aliquam leo, ut ullamcorper tor.
          </p>
          <div>
            <span>Voir le catalogue</span>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM2 40C2 60.9868 19.0132 78 40 78C60.9868 78 78 60.9868 78 40C78 19.0132 60.9868 2 40 2C19.0132 2 2 19.0132 2 40Z"
                fill="#785436"
              />
              <path
                d="M62.6103 38.9032H12.9034V41.0967H62.6103V44.387L67.0969 39.9999L62.6103 35.6128V38.9032Z"
                fill="#785436"
              />
            </svg>
          </div>
        </div>
      </Content>
      <ul>
        <li>
          <Link href="/mobilier/">
            <p>Mobilier</p>
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1.13281V4.88281C0 9.62891 0.136719 9.94141 2.20703 9.96094H3.32031V45.8789C3.32031 69.2188 3.37891 81.9922 3.51563 82.3242C3.75 82.9297 4.74609 83.3984 5.83984 83.3984H6.62109L6.73828 99.0625L7.28516 99.5312C7.83203 100 7.89062 100 11.6992 100C15.4492 100 15.5859 99.9805 16.0352 99.5508C16.4648 99.1797 16.6992 98.2617 18.0273 91.6016C18.8672 87.4609 19.6094 83.9258 19.6484 83.7305C19.7461 83.418 21.3672 83.3984 50 83.3984C78.6328 83.3984 80.2539 83.418 80.3516 83.7305C80.3906 83.9258 81.1328 87.4609 81.9727 91.6016C83.3008 98.2617 83.5352 99.1797 83.9648 99.5508C84.4141 99.9805 84.5508 100 88.3008 100C92.1094 100 92.168 100 92.7148 99.5312L93.2617 99.0625L93.3789 83.3984H94.1602C95.2539 83.3984 96.25 82.9297 96.4844 82.3242C96.6211 81.9922 96.6797 69.2188 96.6797 45.8789V9.96094H97.8125C99.8633 9.94141 100 9.62891 100 4.88281V1.13281L98.8672 0H1.13281L0 1.13281ZM96.6797 6.64063H3.32031V3.32031H96.6797V6.64063ZM93.3594 80.0781H6.64063V9.96094H93.3594V80.0781ZM16.2109 83.6524C16.2109 83.7891 15.6445 86.7578 14.9414 90.2344C14.2383 93.7109 13.6719 96.582 13.6719 96.6211C13.6719 96.6602 12.832 96.6797 11.8164 96.6797H9.96094V83.3984H13.0859C15.5078 83.3984 16.2109 83.457 16.2109 83.6524ZM90.0391 96.6797H88.1836C87.168 96.6797 86.3281 96.6602 86.3281 96.6211C86.3281 96.582 85.7617 93.7109 85.0586 90.2344C84.3555 86.7578 83.7891 83.7891 83.7891 83.6524C83.7891 83.457 84.4922 83.3984 86.9141 83.3984H90.0391V96.6797Z"
                fill="#DDB892"
              />
              <path
                d="M12.8906 13.4179C12.7344 13.4765 12.4023 13.7109 12.168 13.9258L11.7188 14.3164V28.3008C11.7383 43.0859 11.6992 42.6367 12.6367 43.125C13.2422 43.457 86.7578 43.457 87.3633 43.125C88.3008 42.6367 88.2617 43.0859 88.2812 28.3008V14.3164L87.2656 13.3789L50.2344 13.3398C29.8633 13.3203 13.0469 13.3593 12.8906 13.4179ZM84.9609 40.039H15.0391V16.6015H84.9609V40.039Z"
                fill="#DDB892"
              />
              <path
                d="M49.0821 20.1367C45.2149 20.8594 43.711 25.7031 46.5039 28.4961C49.5899 31.6016 54.9219 29.3945 54.9219 25C54.9219 21.875 52.1485 19.5703 49.0821 20.1367ZM51.1133 23.8672C52.1094 24.8047 51.4063 26.5625 50.0196 26.5625C49.1016 26.5625 48.4375 25.9375 48.4375 25.0195C48.4375 23.6133 50.0781 22.8906 51.1133 23.8672Z"
                fill="#DDB892"
              />
              <path
                d="M12.2266 47.1875L11.7188 47.7148V75.5664L12.6562 76.6601H87.3438L88.2812 75.5664V47.7148L87.7734 47.1875L87.2461 46.6797H12.7539L12.2266 47.1875ZM84.9609 73.2422H15.0391V50H84.9609V73.2422Z"
                fill="#DDB892"
              />
              <path
                d="M48.4375 53.6133C45.8789 54.414 44.3359 57.7148 45.3711 60.1758C46.4453 62.7539 49.5507 63.9843 52.0507 62.8125C53.8476 61.9922 54.9218 60.332 54.9218 58.3984C54.9218 56.1523 53.5351 54.2187 51.4843 53.6133C50.3125 53.2617 49.5898 53.2617 48.4375 53.6133ZM50.7617 56.9336C51.4062 57.2461 51.5625 57.5781 51.5625 58.4961C51.5625 59.2773 50.8203 59.9609 50 59.9609C48.3203 59.9609 47.8125 57.6953 49.3164 56.875C49.8437 56.582 50.1172 56.582 50.7617 56.9336Z"
                fill="#DDB892"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/interieur/">
            <p>Intérieur</p>
            <svg
              width="128"
              height="100"
              viewBox="0 0 128 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.7449 0.233281C30.6453 0.466563 27.1461 1.52929 25.2539 2.46242C22.9989 3.6029 20.2773 5.6506 18.5406 7.46501C15.1451 11.0679 13.4084 14.3339 11.8532 19.9067C11.6199 20.788 11.5162 29.9378 11.3866 58.9165L11.257 96.76L6.09893 96.8377C1.74435 96.8896 0.837139 96.9673 0.448337 97.3302C-0.018226 97.7709 -0.147827 98.6003 0.189135 99.1187C0.733459 99.9482 1.53698 100 13.8491 100H26.1871L26.8091 99.352C27.5608 98.6262 27.6127 98.2634 27.0424 97.4598C26.6536 96.8896 26.5499 96.8896 20.5624 96.8896H14.4971V60.0052C14.4971 35.3551 14.5748 22.6024 14.7822 21.5656C16.3374 12.7527 22.636 5.80612 30.9564 3.70658C33.5484 3.03266 37.8252 3.0845 40.5468 3.81026C49.1264 6.06532 55.3213 13.4007 56.6173 22.8097L56.7729 24.0021L55.3991 24.2872C50.9149 25.2203 46.975 28.7195 45.3939 33.2037C44.9014 34.6034 44.72 35.7698 44.6163 37.8175C44.4608 41.7055 44.4089 41.6796 49.3079 41.6796H52.9885L53.6365 42.8979C55.8656 47.0969 61.931 46.8377 63.7195 42.4832L64.0564 41.6796H67.5297C70.7179 41.6796 71.0549 41.6278 71.5474 41.1353C72.0658 40.6169 72.0917 40.3836 71.9621 37.8175C71.8066 34.4997 71.1586 32.4002 69.5515 29.9637C67.6853 27.1643 64.4711 24.987 61.257 24.3131L59.8833 24.028L59.7278 22.8097C58.2244 10.6791 49.5671 1.58113 38.214 0.233281C35.6479 -0.0777605 35.3887 -0.0777605 32.7449 0.233281ZM62.7086 28.1234C64.834 29.1343 66.2337 30.3525 67.2964 32.1151C68.2037 33.6444 68.9294 36.055 68.9294 37.5842V38.5692H47.6749V37.5842C47.6749 34.9663 49.2301 31.5189 51.1741 29.8341C53.4292 27.8901 55.5546 27.1384 58.691 27.2421C60.6609 27.2939 61.283 27.4235 62.7086 28.1234ZM60.4794 41.9647C60.4017 42.1203 59.9092 42.4054 59.4426 42.6128C58.6909 42.9238 58.4317 42.9238 57.6801 42.6128C56.073 41.9388 56.3063 41.6796 58.5613 41.6796C60.0388 41.6796 60.609 41.7574 60.4794 41.9647Z"
                fill="#DDB892"
              />
              <path
                d="M53.2995 30.6636C51.6925 31.8818 50.2669 33.7999 50.2669 34.7071C50.2669 35.4329 51.0445 36.2364 51.7962 36.2364C52.3405 36.2364 56.4877 31.8818 56.4877 31.2856C56.4877 30.6636 55.6064 29.7564 54.9584 29.7564C54.6992 29.7564 53.9475 30.1711 53.2995 30.6636Z"
                fill="#DDB892"
              />
              <path
                d="M44.3053 56.3245C42.6982 56.8429 41.3763 58.0093 40.5728 59.6164C39.8989 60.9383 39.8989 61.042 39.8989 66.7963V72.6542L38.3696 73.0949C36.5292 73.6392 34.5334 75.3499 33.6521 77.1125C33.03 78.3567 33.03 78.4344 32.9523 88.5174L32.8745 98.704L34.1705 100H46.9232L47.5453 99.352C48.0378 98.8854 48.1933 98.4448 48.1933 97.5376V96.3712H112.138L112.268 97.6931C112.501 99.8963 112.372 99.8704 119.526 99.9482C126.161 100.026 127.146 99.8963 127.405 98.8595C127.483 98.5744 127.509 93.831 127.457 88.3359C127.379 78.7455 127.354 78.3048 126.809 77.1384C126.524 76.4904 125.772 75.4795 125.176 74.8834C124.139 73.8984 121.833 72.7838 120.77 72.7838C120.329 72.7838 120.277 72.4469 120.2 66.874C120.096 60.4199 120.018 59.9793 118.437 58.1649C117.97 57.6464 117.089 56.9466 116.519 56.6356C115.456 56.0653 115.43 56.0653 99.3856 56.0653C84.1964 56.0653 83.2633 56.0912 82.4079 56.5578C81.9155 56.817 81.1897 57.3354 80.8009 57.6983L80.0751 58.3722L79.3753 57.6983C77.5349 55.9876 78.4422 56.0653 61.1534 56.0135C48.2711 55.9616 45.2643 56.0394 44.3053 56.3245ZM76.3945 59.409C76.7833 59.6164 77.3794 60.0829 77.7423 60.4717L78.3903 61.1716L78.5458 80.8191H48.2452L48.0637 79.5749C47.7786 77.5791 46.9492 75.972 45.5235 74.7278C44.8237 74.0798 43.9683 73.4837 43.6314 73.4059L43.0093 73.2504V67.3665C43.0093 61.9492 43.0611 61.4567 43.5277 60.6532C44.5127 59.0461 44.2275 59.0721 60.7128 59.0461C73.0767 59.0461 75.8242 59.098 76.3945 59.409ZM115.041 59.5127C115.534 59.746 116.182 60.2903 116.467 60.6791C116.985 61.353 117.011 61.8196 117.089 67.3406L117.167 73.2763L116.156 73.7947C114.393 74.7019 112.501 77.3717 112.475 79.0047C112.475 79.3675 112.398 79.9119 112.32 80.2229L112.164 80.8191H81.6303V71.2805C81.6303 62.2343 81.6563 61.7159 82.1487 60.9124C82.4339 60.4458 83.03 59.8497 83.4966 59.5645C84.326 59.0721 84.8444 59.0461 99.256 59.0461C112.942 59.0461 114.238 59.0721 115.041 59.5127ZM42.3094 76.2571C43.424 76.6978 44.4867 77.9938 44.8237 79.2639C44.9792 79.886 45.057 83.3852 45.0311 88.5174L44.9533 96.76H36.1404L36.0627 88.4655C36.0108 83.1 36.0886 79.8341 36.27 79.212C37.0217 76.5682 39.8211 75.1944 42.3094 76.2571ZM121.47 76.1794C121.858 76.309 122.532 76.7496 122.947 77.1384C124.373 78.4603 124.399 78.7455 124.399 88.2063V96.8896L119.94 96.8377L115.456 96.76V87.9471C115.456 80.2488 115.508 79.0306 115.871 78.3567C117.011 76.309 119.37 75.3758 121.47 76.1794ZM112.216 93.2608H48.1933V83.9295H112.216V93.2608Z"
                fill="#DDB892"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/produits/">
            <p>Produits</p>
            <svg
              width="64"
              height="100"
              viewBox="0 0 64 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1956 0.198046C10.433 0.413136 9.22064 1.42993 8.82957 2.17297C8.53626 2.74002 4.84062 22.8216 4.84062 23.858C4.84062 24.4837 5.62277 25.2072 6.30715 25.2072C6.56134 25.2072 6.95242 25.0508 7.18706 24.8552C7.55858 24.5619 7.81278 23.33 9.45529 14.2571C10.4525 8.60613 11.2933 3.9328 11.2933 3.83503C11.2933 3.75681 11.4693 3.52217 11.6844 3.30708C12.0755 2.91601 12.3297 2.91601 31.5118 2.91601C42.2077 2.91601 51.1046 2.97467 51.261 3.03333C51.437 3.11154 51.6717 3.30708 51.7694 3.48306C51.9454 3.81548 60.3731 50.627 60.3731 51.2722C60.3731 51.4482 60.1971 51.7806 59.982 51.9957C59.5909 52.3868 59.3367 52.3868 31.6292 52.3868C3.9216 52.3868 3.6674 52.3868 3.27633 51.9957C3.06124 51.7806 2.88525 51.4482 2.88525 51.2331C2.88525 51.0376 3.68695 46.4425 4.66464 41.0261C5.64232 35.6098 6.44402 30.8778 6.46357 30.5258C6.48313 29.7045 5.85741 29.0593 5.03616 29.0593C3.80428 29.0593 3.82383 29.0006 1.90757 39.6769C-0.204228 51.4482 -0.204228 51.5069 0.225953 52.6801C0.63658 53.7165 1.77069 54.7724 2.8657 55.0852C3.39365 55.2416 6.38536 55.3199 12.7794 55.3199H21.9696L21.9501 56.6495C21.9501 57.373 22.0087 58.1356 22.1065 58.3702C22.2238 58.7222 22.0283 58.8786 20.2098 59.7781C14.4024 62.672 10.5698 67.3063 9.22064 73.0746C9.04466 73.8567 8.90778 75.2646 8.90778 76.5356C8.90778 80.1335 9.88547 83.2621 11.9582 86.3906C13.0532 88.0332 16.084 90.9662 17.7069 91.9634C18.3718 92.3936 18.9193 92.7847 18.9193 92.8629C18.9193 92.9411 18.7628 93.2931 18.5869 93.6646C18.3522 94.0948 18.2349 94.7792 18.2349 95.62C18.2349 96.715 18.3327 97.0474 18.8215 97.8686C19.193 98.4553 19.7796 99.0419 20.3662 99.4134L21.3244 100H31.6292H41.9339L42.8921 99.4134C43.4787 99.0419 44.0653 98.4553 44.4368 97.8686C44.9257 97.0474 45.0234 96.715 45.0234 95.62C45.0234 94.7792 44.9061 94.0948 44.691 93.6646C44.4955 93.2931 44.339 92.9411 44.339 92.8629C44.339 92.7847 44.8474 92.4132 45.4732 92.0221C47.1743 90.9662 47.6632 90.4187 47.6632 89.6366C47.6632 88.8153 47.0961 88.17 46.3726 88.17C46.0989 88.17 45.3363 88.5415 44.6715 89.0304C44.0066 89.4997 42.9312 90.1645 42.3055 90.4969L41.1322 91.1226L31.4532 91.064L21.7545 91.0053L20.0925 90.0276C17.9416 88.7566 14.989 85.8822 13.894 83.966C9.02511 75.4992 13.0532 65.7224 23.0646 61.6748C24.3552 61.1664 24.7854 61.0686 25.2547 61.2055C26.0172 61.4206 36.9673 61.4206 37.9059 61.2055C38.512 61.0686 38.9031 61.1468 40.3696 61.753C42.3641 62.5743 43.1463 63.024 44.867 64.295L46.0989 65.1945V71.4907C46.0989 78.1585 46.1575 78.5692 47.0179 78.9602C47.6827 79.2536 47.9369 79.234 48.504 78.7647L49.0319 78.3736L49.071 73.5439L49.1297 68.7141L49.8727 70.1611C51.9259 74.1109 51.9454 78.7647 49.8923 83.0274C49.2666 84.318 49.2275 84.4939 49.4621 84.9828C49.599 85.2761 49.9509 85.6476 50.2638 85.8236C51.1242 86.3124 51.7108 85.8431 52.6885 83.8682C53.8226 81.6 54.331 79.3513 54.331 76.5356C54.331 72.2729 52.9231 68.5186 50.0878 65.1749L49.0319 63.943V59.6217V55.3199H54.331C60.3731 55.3199 60.8423 55.2416 62.0547 54.0293C63.0324 53.0516 63.3843 52.0739 63.2474 50.7443C63.1301 49.532 54.9567 3.89369 54.6829 2.85735C54.4287 1.87966 53.0209 0.471797 52.0432 0.198046C51.1046 -0.0561518 12.0755 -0.0757055 11.1956 0.198046ZM37.9841 55.8087C38.512 56.3171 38.5903 56.8059 38.2578 57.5294C37.8668 58.3898 37.417 58.4484 31.6292 58.4484C25.8413 58.4484 25.3915 58.3898 25.0005 57.5294C24.668 56.8059 24.7463 56.3171 25.2742 55.8087L25.7435 55.3199H31.6292H37.5148L37.9841 55.8087ZM46.0989 58.3507C46.0989 60.0127 46.0402 61.3815 45.9815 61.3815C45.9229 61.3815 45.6296 61.2055 45.3167 60.9904C45.0234 60.7753 43.9284 60.1887 42.8921 59.6999C41.0931 58.82 41.0345 58.7613 41.1713 58.2725C41.2496 57.9987 41.3082 57.2166 41.3082 56.5322L41.2887 55.3199H43.6938H46.0989V58.3507ZM41.6993 94.525C42.4619 95.268 42.2272 96.5194 41.2691 96.9496C40.6043 97.2429 22.654 97.2429 21.9892 96.9496C21.0702 96.539 20.816 95.3853 21.4808 94.5445L21.8719 94.0361H31.5509H41.23L41.6993 94.525Z"
                fill="#DDB892"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p>Architecture</p>
            <svg
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="path-1-outside-1_247_281"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="102"
                height="102"
                fill="black"
              >
                <rect fill="white" width="102" height="102" />
                <path d="M81.8182 1.26937C81.0566 1.67947 3.90064 48.8401 3.02187 49.4455C2.06498 50.1095 1.18621 51.6131 1.02999 52.902C0.756592 55.3821 2.37743 57.5497 4.87705 58.0574C6.34166 58.3699 7.06421 58.1356 9.6224 56.5733L11.7119 55.3235V67.6067V79.9095H8.06015C3.99828 79.9095 3.23668 80.0462 2.24074 80.9055C0.3465 82.5654 0.717536 85.8656 2.9047 86.8616L3.68583 87.2326L3.70535 93.6379V100.043L4.19356 100.512L4.66224 101H52.4283C99.9209 101 100.175 101 100.565 100.609C100.956 100.219 100.956 99.965 100.956 70.0868C100.956 41.1265 100.936 39.9157 100.604 39.6228C100.292 39.3494 99.7647 39.2908 97.187 39.2908H94.121V24.9376V10.5843H95.7419C96.8745 10.5843 97.5775 10.4672 98.1243 10.2133C99.1788 9.74462 100.448 8.26048 100.761 7.1669C101.483 4.56964 99.8428 1.77711 97.226 1.23032C95.7223 0.898337 82.4431 0.937394 81.8182 1.26937ZM96.523 3.30031C98.261 3.5737 99.2179 5.38983 98.4563 6.97161C97.7533 8.4167 97.6166 8.43623 90.4107 8.43623H84.103L83.1071 9.06113C81.9159 9.80321 72.4252 15.6031 23.9171 45.286C14.7974 50.8711 7.14232 55.5188 6.92751 55.6359C6.51742 55.8508 5.89251 55.9484 5.09186 55.9093C4.44743 55.8898 3.37337 54.7376 3.21715 53.8979C3.11951 53.3902 3.19762 52.941 3.47102 52.3357C3.84205 51.4764 4.05686 51.3397 35.6535 32.0263C53.1508 21.3249 70.9215 10.4672 75.1591 7.86991L82.8532 3.16361H89.3171C92.8712 3.16361 96.1129 3.2222 96.523 3.30031ZM86.8956 24.9376V39.2908H81.0957C74.5537 39.2908 74.2999 39.3494 73.0891 40.7164C71.605 42.3958 72.1908 45.325 74.1827 46.2429L74.9638 46.6139L74.9834 49.6798V52.7653H71.9565H68.9296L68.9687 36.5178L69.0273 20.2508L76.8385 15.4469C84.5912 10.6624 84.6498 10.6234 85.7825 10.6039L86.8956 10.5843V24.9376ZM91.9339 24.9766L91.9729 39.2908H90.6059H89.239V24.9376V10.5648L90.5669 10.6234L91.8753 10.682L91.9339 24.9766ZM66.7815 37.2404V52.7653H65.4145H64.0476V38.041V23.3167L65.2778 22.5161C65.9418 22.0865 66.5472 21.7349 66.6448 21.7349C66.7229 21.7154 66.7815 28.7065 66.7815 37.2404ZM61.8995 38.6854V52.7458L56.5682 52.8043L51.2175 52.8629L50.2802 53.4488C47.8587 54.9525 47.8977 58.2723 50.3387 59.6978L51.3347 60.2837L51.3542 63.3496V66.435H47.6439H43.9335L43.9725 50.9882L44.0311 35.5414L52.9165 30.093C57.7985 27.1052 61.8213 24.6447 61.8604 24.6447C61.8799 24.6447 61.8995 30.9718 61.8995 38.6854ZM41.7854 51.6912V66.435H40.4184H39.0514V52.4919V38.5487L40.3794 37.7676C41.1019 37.3185 41.7073 36.967 41.7463 36.9474C41.7659 36.9474 41.7854 43.587 41.7854 51.6912ZM36.9033 53.2535V66.435H32.3142C26.6901 66.435 26.1042 66.6108 25.1669 68.4269C24.2686 70.1649 24.9521 72.3912 26.6315 73.2895L27.5298 73.7581V76.8241V79.9095H23.2336H18.9374V65.4001V50.8906L27.7837 45.4813C32.6267 42.513 36.669 40.0719 36.7666 40.0719C36.8447 40.0719 36.9033 46.0085 36.9033 53.2535ZM98.8078 43.0012V44.5634L86.9737 44.5244L75.1396 44.4658L74.7686 43.9971C74.1241 43.216 74.3389 42.2005 75.2763 41.6733C75.5497 41.517 78.9085 41.4585 87.2471 41.4389H98.8078V43.0012ZM98.7687 72.7231L98.7102 98.7543L52.3892 98.8128L6.04874 98.8519V93.0911V87.3302H17.5509C27.7641 87.3302 29.092 87.2912 29.3654 87.0178C29.6388 86.7639 29.6779 85.8656 29.6779 80.2806V73.8558H41.1995C52.4673 73.8558 52.7212 73.8558 53.1118 73.4652C53.4828 73.0942 53.5023 72.8208 53.5023 66.728V60.3813L65.024 60.3422C75.1591 60.2837 76.5651 60.2446 76.8385 59.9712C77.1119 59.7173 77.151 58.819 77.1315 53.1949V46.7115H87.9696H98.8078L98.7687 72.7231ZM16.7893 66.1421V79.9095H15.4223H14.0553V66.8647V53.8393L15.2856 53.1168C15.9495 52.7262 16.5549 52.3943 16.6526 52.3747C16.7307 52.3747 16.7893 58.5652 16.7893 66.1421ZM74.9834 56.5733V58.0379H63.286C52.1549 58.0379 51.569 58.0184 51.1394 57.6669C50.8074 57.413 50.6903 57.1006 50.6903 56.5733C50.6903 56.046 50.8074 55.7336 51.1394 55.4797C51.569 55.1282 52.1549 55.1087 63.286 55.1087H74.9834V56.5733ZM51.3152 70.0868L51.2566 71.61L39.9302 71.6686C33.7007 71.6881 28.4086 71.6686 28.1547 71.61C26.9635 71.3171 26.5534 69.9306 27.4321 69.0714L27.9008 68.5832H39.6373H51.3737L51.3152 70.0868ZM27.5298 83.6199V85.1821H15.8129H4.07639L3.60771 84.6939C3.33432 84.4401 3.11951 84.0104 3.11951 83.7761C3.11951 83.1903 3.62724 82.4677 4.17403 82.2529C4.38884 82.1553 9.73957 82.0772 16.0667 82.0772H27.5298V83.6199Z" />
              </mask>
              <path
                d="M81.8182 1.26937C81.0566 1.67947 3.90064 48.8401 3.02187 49.4455C2.06498 50.1095 1.18621 51.6131 1.02999 52.902C0.756592 55.3821 2.37743 57.5497 4.87705 58.0574C6.34166 58.3699 7.06421 58.1356 9.6224 56.5733L11.7119 55.3235V67.6067V79.9095H8.06015C3.99828 79.9095 3.23668 80.0462 2.24074 80.9055C0.3465 82.5654 0.717536 85.8656 2.9047 86.8616L3.68583 87.2326L3.70535 93.6379V100.043L4.19356 100.512L4.66224 101H52.4283C99.9209 101 100.175 101 100.565 100.609C100.956 100.219 100.956 99.965 100.956 70.0868C100.956 41.1265 100.936 39.9157 100.604 39.6228C100.292 39.3494 99.7647 39.2908 97.187 39.2908H94.121V24.9376V10.5843H95.7419C96.8745 10.5843 97.5775 10.4672 98.1243 10.2133C99.1788 9.74462 100.448 8.26048 100.761 7.1669C101.483 4.56964 99.8428 1.77711 97.226 1.23032C95.7223 0.898337 82.4431 0.937394 81.8182 1.26937ZM96.523 3.30031C98.261 3.5737 99.2179 5.38983 98.4563 6.97161C97.7533 8.4167 97.6166 8.43623 90.4107 8.43623H84.103L83.1071 9.06113C81.9159 9.80321 72.4252 15.6031 23.9171 45.286C14.7974 50.8711 7.14232 55.5188 6.92751 55.6359C6.51742 55.8508 5.89251 55.9484 5.09186 55.9093C4.44743 55.8898 3.37337 54.7376 3.21715 53.8979C3.11951 53.3902 3.19762 52.941 3.47102 52.3357C3.84205 51.4764 4.05686 51.3397 35.6535 32.0263C53.1508 21.3249 70.9215 10.4672 75.1591 7.86991L82.8532 3.16361H89.3171C92.8712 3.16361 96.1129 3.2222 96.523 3.30031ZM86.8956 24.9376V39.2908H81.0957C74.5537 39.2908 74.2999 39.3494 73.0891 40.7164C71.605 42.3958 72.1908 45.325 74.1827 46.2429L74.9638 46.6139L74.9834 49.6798V52.7653H71.9565H68.9296L68.9687 36.5178L69.0273 20.2508L76.8385 15.4469C84.5912 10.6624 84.6498 10.6234 85.7825 10.6039L86.8956 10.5843V24.9376ZM91.9339 24.9766L91.9729 39.2908H90.6059H89.239V24.9376V10.5648L90.5669 10.6234L91.8753 10.682L91.9339 24.9766ZM66.7815 37.2404V52.7653H65.4145H64.0476V38.041V23.3167L65.2778 22.5161C65.9418 22.0865 66.5472 21.7349 66.6448 21.7349C66.7229 21.7154 66.7815 28.7065 66.7815 37.2404ZM61.8995 38.6854V52.7458L56.5682 52.8043L51.2175 52.8629L50.2802 53.4488C47.8587 54.9525 47.8977 58.2723 50.3387 59.6978L51.3347 60.2837L51.3542 63.3496V66.435H47.6439H43.9335L43.9725 50.9882L44.0311 35.5414L52.9165 30.093C57.7985 27.1052 61.8213 24.6447 61.8604 24.6447C61.8799 24.6447 61.8995 30.9718 61.8995 38.6854ZM41.7854 51.6912V66.435H40.4184H39.0514V52.4919V38.5487L40.3794 37.7676C41.1019 37.3185 41.7073 36.967 41.7463 36.9474C41.7659 36.9474 41.7854 43.587 41.7854 51.6912ZM36.9033 53.2535V66.435H32.3142C26.6901 66.435 26.1042 66.6108 25.1669 68.4269C24.2686 70.1649 24.9521 72.3912 26.6315 73.2895L27.5298 73.7581V76.8241V79.9095H23.2336H18.9374V65.4001V50.8906L27.7837 45.4813C32.6267 42.513 36.669 40.0719 36.7666 40.0719C36.8447 40.0719 36.9033 46.0085 36.9033 53.2535ZM98.8078 43.0012V44.5634L86.9737 44.5244L75.1396 44.4658L74.7686 43.9971C74.1241 43.216 74.3389 42.2005 75.2763 41.6733C75.5497 41.517 78.9085 41.4585 87.2471 41.4389H98.8078V43.0012ZM98.7687 72.7231L98.7102 98.7543L52.3892 98.8128L6.04874 98.8519V93.0911V87.3302H17.5509C27.7641 87.3302 29.092 87.2912 29.3654 87.0178C29.6388 86.7639 29.6779 85.8656 29.6779 80.2806V73.8558H41.1995C52.4673 73.8558 52.7212 73.8558 53.1118 73.4652C53.4828 73.0942 53.5023 72.8208 53.5023 66.728V60.3813L65.024 60.3422C75.1591 60.2837 76.5651 60.2446 76.8385 59.9712C77.1119 59.7173 77.151 58.819 77.1315 53.1949V46.7115H87.9696H98.8078L98.7687 72.7231ZM16.7893 66.1421V79.9095H15.4223H14.0553V66.8647V53.8393L15.2856 53.1168C15.9495 52.7262 16.5549 52.3943 16.6526 52.3747C16.7307 52.3747 16.7893 58.5652 16.7893 66.1421ZM74.9834 56.5733V58.0379H63.286C52.1549 58.0379 51.569 58.0184 51.1394 57.6669C50.8074 57.413 50.6903 57.1006 50.6903 56.5733C50.6903 56.046 50.8074 55.7336 51.1394 55.4797C51.569 55.1282 52.1549 55.1087 63.286 55.1087H74.9834V56.5733ZM51.3152 70.0868L51.2566 71.61L39.9302 71.6686C33.7007 71.6881 28.4086 71.6686 28.1547 71.61C26.9635 71.3171 26.5534 69.9306 27.4321 69.0714L27.9008 68.5832H39.6373H51.3737L51.3152 70.0868ZM27.5298 83.6199V85.1821H15.8129H4.07639L3.60771 84.6939C3.33432 84.4401 3.11951 84.0104 3.11951 83.7761C3.11951 83.1903 3.62724 82.4677 4.17403 82.2529C4.38884 82.1553 9.73957 82.0772 16.0667 82.0772H27.5298V83.6199Z"
                fill="#DDB892"
              />
              <path
                d="M81.8182 1.26937C81.0566 1.67947 3.90064 48.8401 3.02187 49.4455C2.06498 50.1095 1.18621 51.6131 1.02999 52.902C0.756592 55.3821 2.37743 57.5497 4.87705 58.0574C6.34166 58.3699 7.06421 58.1356 9.6224 56.5733L11.7119 55.3235V67.6067V79.9095H8.06015C3.99828 79.9095 3.23668 80.0462 2.24074 80.9055C0.3465 82.5654 0.717536 85.8656 2.9047 86.8616L3.68583 87.2326L3.70535 93.6379V100.043L4.19356 100.512L4.66224 101H52.4283C99.9209 101 100.175 101 100.565 100.609C100.956 100.219 100.956 99.965 100.956 70.0868C100.956 41.1265 100.936 39.9157 100.604 39.6228C100.292 39.3494 99.7647 39.2908 97.187 39.2908H94.121V24.9376V10.5843H95.7419C96.8745 10.5843 97.5775 10.4672 98.1243 10.2133C99.1788 9.74462 100.448 8.26048 100.761 7.1669C101.483 4.56964 99.8428 1.77711 97.226 1.23032C95.7223 0.898337 82.4431 0.937394 81.8182 1.26937ZM96.523 3.30031C98.261 3.5737 99.2179 5.38983 98.4563 6.97161C97.7533 8.4167 97.6166 8.43623 90.4107 8.43623H84.103L83.1071 9.06113C81.9159 9.80321 72.4252 15.6031 23.9171 45.286C14.7974 50.8711 7.14232 55.5188 6.92751 55.6359C6.51742 55.8508 5.89251 55.9484 5.09186 55.9093C4.44743 55.8898 3.37337 54.7376 3.21715 53.8979C3.11951 53.3902 3.19762 52.941 3.47102 52.3357C3.84205 51.4764 4.05686 51.3397 35.6535 32.0263C53.1508 21.3249 70.9215 10.4672 75.1591 7.86991L82.8532 3.16361H89.3171C92.8712 3.16361 96.1129 3.2222 96.523 3.30031ZM86.8956 24.9376V39.2908H81.0957C74.5537 39.2908 74.2999 39.3494 73.0891 40.7164C71.605 42.3958 72.1908 45.325 74.1827 46.2429L74.9638 46.6139L74.9834 49.6798V52.7653H71.9565H68.9296L68.9687 36.5178L69.0273 20.2508L76.8385 15.4469C84.5912 10.6624 84.6498 10.6234 85.7825 10.6039L86.8956 10.5843V24.9376ZM91.9339 24.9766L91.9729 39.2908H90.6059H89.239V24.9376V10.5648L90.5669 10.6234L91.8753 10.682L91.9339 24.9766ZM66.7815 37.2404V52.7653H65.4145H64.0476V38.041V23.3167L65.2778 22.5161C65.9418 22.0865 66.5472 21.7349 66.6448 21.7349C66.7229 21.7154 66.7815 28.7065 66.7815 37.2404ZM61.8995 38.6854V52.7458L56.5682 52.8043L51.2175 52.8629L50.2802 53.4488C47.8587 54.9525 47.8977 58.2723 50.3387 59.6978L51.3347 60.2837L51.3542 63.3496V66.435H47.6439H43.9335L43.9725 50.9882L44.0311 35.5414L52.9165 30.093C57.7985 27.1052 61.8213 24.6447 61.8604 24.6447C61.8799 24.6447 61.8995 30.9718 61.8995 38.6854ZM41.7854 51.6912V66.435H40.4184H39.0514V52.4919V38.5487L40.3794 37.7676C41.1019 37.3185 41.7073 36.967 41.7463 36.9474C41.7659 36.9474 41.7854 43.587 41.7854 51.6912ZM36.9033 53.2535V66.435H32.3142C26.6901 66.435 26.1042 66.6108 25.1669 68.4269C24.2686 70.1649 24.9521 72.3912 26.6315 73.2895L27.5298 73.7581V76.8241V79.9095H23.2336H18.9374V65.4001V50.8906L27.7837 45.4813C32.6267 42.513 36.669 40.0719 36.7666 40.0719C36.8447 40.0719 36.9033 46.0085 36.9033 53.2535ZM98.8078 43.0012V44.5634L86.9737 44.5244L75.1396 44.4658L74.7686 43.9971C74.1241 43.216 74.3389 42.2005 75.2763 41.6733C75.5497 41.517 78.9085 41.4585 87.2471 41.4389H98.8078V43.0012ZM98.7687 72.7231L98.7102 98.7543L52.3892 98.8128L6.04874 98.8519V93.0911V87.3302H17.5509C27.7641 87.3302 29.092 87.2912 29.3654 87.0178C29.6388 86.7639 29.6779 85.8656 29.6779 80.2806V73.8558H41.1995C52.4673 73.8558 52.7212 73.8558 53.1118 73.4652C53.4828 73.0942 53.5023 72.8208 53.5023 66.728V60.3813L65.024 60.3422C75.1591 60.2837 76.5651 60.2446 76.8385 59.9712C77.1119 59.7173 77.151 58.819 77.1315 53.1949V46.7115H87.9696H98.8078L98.7687 72.7231ZM16.7893 66.1421V79.9095H15.4223H14.0553V66.8647V53.8393L15.2856 53.1168C15.9495 52.7262 16.5549 52.3943 16.6526 52.3747C16.7307 52.3747 16.7893 58.5652 16.7893 66.1421ZM74.9834 56.5733V58.0379H63.286C52.1549 58.0379 51.569 58.0184 51.1394 57.6669C50.8074 57.413 50.6903 57.1006 50.6903 56.5733C50.6903 56.046 50.8074 55.7336 51.1394 55.4797C51.569 55.1282 52.1549 55.1087 63.286 55.1087H74.9834V56.5733ZM51.3152 70.0868L51.2566 71.61L39.9302 71.6686C33.7007 71.6881 28.4086 71.6686 28.1547 71.61C26.9635 71.3171 26.5534 69.9306 27.4321 69.0714L27.9008 68.5832H39.6373H51.3737L51.3152 70.0868ZM27.5298 83.6199V85.1821H15.8129H4.07639L3.60771 84.6939C3.33432 84.4401 3.11951 84.0104 3.11951 83.7761C3.11951 83.1903 3.62724 82.4677 4.17403 82.2529C4.38884 82.1553 9.73957 82.0772 16.0667 82.0772H27.5298V83.6199Z"
                stroke="#DDB892"
                stroke-width="0.6"
                mask="url(#path-1-outside-1_247_281)"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

export default Release;
