import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.main};
  height: 48px;
  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;
