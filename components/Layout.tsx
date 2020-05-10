import * as React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { Typography } from "@material-ui/core";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 0.8rem;
  text-align: center;
  color: white;
  a {
    color: white;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    background: linear-gradient(262deg, #ff7854, #fd267d);
  }
`;

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <GlobalStyle />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    {children}
    <StyledFooter>
      <Typography variant="body1">
        Made with ❤️by{" "}
        <a href="https://nilswesthoff.com" target="blank">
          Nils
        </a>
      </Typography>
    </StyledFooter>
  </div>
);

export default Layout;
