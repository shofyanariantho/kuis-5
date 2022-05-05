import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.main};
  border-top: 12px solid ${({ theme }) => theme.colors.second};
  height: 320px;
  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 50px;
    color: #fff;
  }
  .footer__wrapper .footer__column h3 {
    color: #e8be02;
    font-weight: 900;
    font-size: 20px;
  }
  .footer__wrapper .footer__column ul {
    list-style: none;
    padding-left: 0;
  }
  .footer__wrapper .footer__column ul li a {
    color: #fff;
    text-decoration: none;
  }
  .footer__wrapper .footer__column ul li h4 {
    margin: 5px 0;
  }
`;
