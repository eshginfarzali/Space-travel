import { css } from '@emotion/react';

export const planetStyles = css`
  width: 300px;
  height: 300px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const titlePlanetStyles = css`
  top: -80px;
  left: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 55px;
`;

export const titleStyles = css`
  font-family: Barlow Condensed;
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 3.725px;
  text-align: left;
  color: var(--text-white);

  > span {
    color: #4b4f66;
    font-weight: 700;
  }
`;

export const mainStyles = css`
  display: flex;
  justify-content: space-around;
`;

export const textBoxAndOutletStyles = css`
  width: 445px;
  height: 300px;
  right: 130px;
`;

export const textBoxStyles = css`
  > h1 {
    font-family: Bellefair;
    font-size: 100px;
    font-weight: 400;
    line-height: 115px;
    letter-spacing: 0;
    text-align: left;
    color: var(--text-white);
  }

  > p {
    font-family: Barlow;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0;
    text-align: left;
    color: #d0d6f9;
  }
`;

export const hrStyles = css`
  border: 1px solid #383b4b;
  width: 444px;
  height: 1px;
  margin-top: 20px;
`;

export const infoBoxStyles = css`
  margin-top: 25px;
  display: flex;
  align-items: flex-start;
  gap: 60px;
`;

export const infoTextStyles = css`
  font-family: Barlow Condensed;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 2.3625px;
  text-align: left;
  color: #d0d6f9;
`;

export const infoHeadingStyles = css`
  margin-top: 10px;
  font-family: Bellefair;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
  color: #fff;
`;

// export const mediaQueryStyles = css`
//   @media (max-width: 1124px) {
//     .main {
//       display: flex;
//       flex-direction: column;
//       margin-top: -330px;
//       align-items: center;
//       gap: 50px;
//     }

//     .textBoxAndOutlet {
//       display: flex;
//       justify-content: center;
//       width: 300px;
//       height: 300px;
//     }

//     .planet {
//       width: 250px;
//       height: 250px;

//       > img {
//         width: 100%;
//         height: 100%;
//       }
//     }

//     .titlePlanet {
//       top: -130px;
//       left: 230px;
//       display: flex;
//       flex-direction: column;
//       gap: 15px;
//     }

//     .textBox {
//       > h1 {
//         font-family: Bellefair;
//         font-size: 80px;
//         font-weight: 400;
//         line-height: 90px;
//         text-align: center;
//       }

//       > p {
//         font-family: Barlow;
//         font-size: 16px;
//         font-weight: 400;
//         line-height: 20px;
//         letter-spacing: 0;
//         text-align: left;
//         color: #d0d6f9;
//       }
//     }

//     .hr {
//       width: 300px;
//       height: 1px;
//       margin-top: 10px;
//     }

//     .infoBox {
//       gap: 60px;
//     }

//     .infoBox p {
//       text-align: center;
//       color: #d0d6f9;
//     }

//     .infoBox h2 {
//       text-align: left;
//       color: #fff;
//     }
//   }

//   @media (max-width: 768px) {
//     .infoBox {
//       flex-direction: column;
//       align-items: center;
//       gap: 15px;
//     }
//   }
// `;
