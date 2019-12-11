import React, { Fragment } from "react";
import Head from "next/head";
import Header from "../Header";
import "./layout.styles.scss";
import NProgress from "nprogress";
import Router from "next/router";

interface Props {
  children?: any;
}

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <Fragment>
    <Head>
      <title>Mercado Libre Argentina</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="shortcut icon"
        href="https://http2.mlstatic.com/ui/navigation/5.3.7/mercadolibre/favicon.ico"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        rel="stylesheet"
      />
    </Head>
    <Header></Header>
    <main className="container mt-4">{children}</main>
  </Fragment>
);

export default Layout;
