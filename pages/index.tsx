import { CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import RocketDataGrid from "../src/components/rocket-datagrid";
import { useGetRocketsQuery } from "../src/generated/graphql";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data, loading } = useGetRocketsQuery({
    variables: { limit: 10 }, //used for pagination
  });

  function renderDataGrid() {
    if (loading) {
      return <CircularProgress />;
    }

    return <RocketDataGrid data={data?.rockets} />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Ben Bradley GraphQL Experiments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{renderDataGrid()}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
