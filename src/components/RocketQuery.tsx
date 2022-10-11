import { CircularProgress } from '@mui/material'
import { useAtom } from 'jotai'
import { Rocket, useGetRocketsQuery } from '../generated/graphql'
import RocketDataGrid from './RocketDataGrid'
import RocketQueryError from './QueryError'
import { queryLimitIntAtom } from '../context/AtomConfigs'

const RocketQuery = () => {
  const [limit] = useAtom(queryLimitIntAtom)
  const { data, loading, error } = useGetRocketsQuery({
    variables: { limit },
  })

  return (
    <>
      {loading ? <CircularProgress /> : undefined}
      {error ? <RocketQueryError error={error} /> : undefined}
      {data ? (
        <RocketDataGrid rocketData={data.rockets as Rocket[]} />
      ) : undefined}
    </>
  )
}

export default RocketQuery
