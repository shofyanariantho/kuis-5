import styled from "styled-components";
import img from "../../img_hero.jpg";

export const StyledMain = styled.main`
  background-image: url(${img});
  color: ${({ theme }) => theme.colors.third};
  height: 65vh;
  background-position: right;
  background-size: cover;
  .main__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  }
  .main__wrapper h1 {
    margin: -50px 0 0;
    color: #4f4d53;
    font-size: 100px;
    font-weight: 900;
  }
  @media (max-width: 1200px) {
    .main__wrapper h1 {
      font-size: 90px;
    }
  }
  @media (max-width: 1000px) {
    .main__wrapper h1 {
      font-size: 80px;
    }
  }
  @media (max-width: 800px) {
    .main__wrapper h1 {
      font-size: 70px;
    }
  }
  @media (max-width: 800px) {
    .main__wrapper {
      align-items: flex-start;
    }
    .main__wrapper h1 {
      font-size: 60px;
      margin-top: 110px;
    }
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  height: ${({ height }) => height || "200px"};
  width: ${({ width }) => width || "200px"};

  @media (max-width: 1200px) {
    height: 160px;
    width: 160px;
  }
  @media (max-width: 860px) {
    height: 130px;
    width: 130px;
  }
  @media (max-width: 650px) {
    height: 100px;
    width: 100px;
  }
`;

export const StyledAboutUs = styled.section`
  margin: 0;
  text-align: center;

  h2 {
    color: #e8be02;
    font-size: 64px;
    font-weight: 900;
  }

  @media (max-width: 860px) {
    h2 {
      font-size: 55px;
    }
  }
  @media (max-width: 650px) {
    h2 {
      font-size: 45px;
    }
  }
`;

export const TeamMember = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -100px;

  @media (max-width: 1200px) {
    margin-top: -80px;
  }
  @media (max-width: 860px) {
    margin-top: -65px;
  }
  @media (max-width: 650px) {
    margin-top: -50px;
  }
`;

export const Description = styled.p`
  color: #4f4d53;
  font-size: 20px;
  line-height: 1.5;

  @media (max-width: 860px) {
    font-size: 17px;
  } ;
`;

export const MemberInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 80px 0;
`;

export const MemberDetail = styled.div`
  display: flex;

  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0;
    color: #e8be02;
  }
  p {
    margin-top: 3px;
    margin-bottom: 0;
  }
  .about-us__team-member__info {
    padding-left: 35px;
    text-align: left;
  }

  @media (max-width: 650px) {
    .about-us__team-member__info {
      padding-left: 15px;
    }
  }
`;

export const Thumbnail = styled.img`
  height: ${({ height }) => height || "100px"};
  width: ${({ width }) => width || "100px"};
  border-radius: 50%;

  @media (max-width: 860px) {
    width: 85px;
    height: 85px;
  }
  @media (max-width: 650px) {
    width: 75px;
    height: 75px;
  }
`;
