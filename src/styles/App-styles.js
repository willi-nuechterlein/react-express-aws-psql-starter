import styled from "styled-components";

export const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3vh;
    padding: 20px 40px;
    background-color: ${({ theme: { colors } }) => colors.white};
`;
