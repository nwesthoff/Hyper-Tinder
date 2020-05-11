import Layout from "../components/Layout";
import HyperTinder from "../components/HyperTinder";
import styled from "styled-components";
import { NextPage } from "next";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { Typography, CircularProgress, Grid } from "@material-ui/core";

const CenterLayout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HyperLogo = styled.img`
  height: 40px;
  margin-right: 0.8rem;
`;

const IndexPage: NextPage = () => {
  const { data, error } = useSWR("/api/users", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <CenterLayout>
        <CircularProgress />
      </CenterLayout>
    );

  return (
    <Layout title="HyperTinder">
      <CenterLayout>
        <HeaderWrapper>
          <HyperLogo src="/img/logo.jpeg" />
          <Typography variant="h4" component="h1" color="textSecondary">
            Tinder
          </Typography>
        </HeaderWrapper>
      </CenterLayout>
      <CenterLayout>
        <HyperTinder users={data} />
      </CenterLayout>
    </Layout>
  );
};

export default IndexPage;
