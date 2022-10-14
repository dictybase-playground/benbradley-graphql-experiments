import { CircularProgress } from '@mui/material'
import { useAtom, useAtomValue } from 'jotai'
import { Rocket, useGetRocketsQuery } from '../generated/graphql'
import RocketDataGrid from './RocketDataGrid'
import RocketQueryError from './QueryError'
import { queryLimitIntAtom, queryTypeAtom } from '../context/AtomConfigs'

const RocketQuery = () => {
  const [limit] = useAtom(queryLimitIntAtom)
  const { headers } = useAtomValue(queryTypeAtom)
  const { data, loading, error } = useGetRocketsQuery({
    variables: { limit },
  })

  return (
    <>
      {loading ? <CircularProgress /> : undefined}
      {error ? <RocketQueryError error={error} /> : undefined}
      {data ? (
        <RocketDataGrid
          rocketHeaders={headers}
          rocketData={data.rockets as Rocket[]}
        />
      ) : undefined}
    </>
  )
}

export default RocketQuery
