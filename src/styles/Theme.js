import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
    colors: {
        lightGrey: "#f8f8f8",
        grey: "#8e8e8e",
        lightBlue: "#b1dffd",
        darkGrey: "#9d9d9d",
        blue: "#0093f9",
        black: "#262626",
        white: "#ffffff",
        red: "#ed4957",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em",
    },
};

export const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme: { fonts } }) => fonts[1]};
    overflow: hidden;
  }
`;

export const Background = styled.div`
    background-color: ${(props) => props.theme.colors.lightGrey};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -50;
`;

export const StyledLink = styled.div`
    color: ${(props) => props.theme.colors.blue};
    font-size: 12px;
    /* font-weight: 400; */
    line-height: 14px;
    margin: 12px 0 0;
    padding: 5px;
    text-align: center;
    appearance: none;
    text-decoration: none;
    vertical-align: baseline;
`;

export const StyledBtn = styled.button`
    align-content: stretch;
    align-items: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    font-size: 14px;
    font-weight: 400;
    justify-content: flex-start;
    line-height: 18px;
    /* margin: 8px; */
    padding: 10px;
    position: relative;
    vertical-align: baseline;
    appearance: none;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.blue};
    border-radius: 5px;
    border: none;
    color: ${({ theme: { colors } }) => colors.white};
    cursor: pointer;
`;

export const StyledInput = styled.input`
    width: 90%;
    padding: 10px;
    margin: auto;
    margin-bottom: 10px;
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.black};
    border: 1px solid ${({ theme: { colors } }) => colors.darkGrey};
    border-radius: 5px;
`;
