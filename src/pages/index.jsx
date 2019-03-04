import React from "react";

import Layout from "../components/Layout";
import { Header } from "../components/Header/Header";
import Summary from "../components/Summary";
import ClientList from "../components/ClientList";

const IndexPage = () => (
  <Layout>
    <Header/>
    <Summary/>
    <ClientList/>
  </Layout>
);

export default IndexPage;
