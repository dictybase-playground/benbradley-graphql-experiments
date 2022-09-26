import { CircularProgress } from '@mui/material'
import { atom, useSetAtom } from 'jotai'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import RocketDataGrid from '../src/components/RocketDataGrid'
import { Rocket, useGetRocketsQuery } from '../src/generated/graphql'
import styles from '../styles/Home.module.css'

export const rocketDataAtom = atom<Rocket[]>([])

const Home: NextPage = () => {
  const { data, loading } = useGetRocketsQuery({
    // used for pagination
    variables: { limit: 10 },
  })

  const setData = useSetAtom(rocketDataAtom)
  const setFetchedData = (payload: Rocket[]) => setData(payload)

  const renderDataGrid = () => {
    if (loading) {
      return <CircularProgress />
    }

    setFetchedData(data?.rockets as Rocket[])
    return <RocketDataGrid />
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
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
