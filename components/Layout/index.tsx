import * as React from "react";
// import Link from "next/link";
import Head from "next/head";
import Header from "../Header";
import "./layout.styles.scss";

interface Props {
  children: any;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Mercado Libre Argentina</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
    <Header></Header>
    <main className="container mt-4">{children}</main>
  </React.Fragment>
);

export default Layout;
