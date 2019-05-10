import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import StudentTable from "../pages/StudentTable";
import data from "../pages/studentdata.json";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StudentTable data={data} />
  </Layout>
);

export default IndexPage;
