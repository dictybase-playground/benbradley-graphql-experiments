import { CircularProgress } from '@mui/material'
import { useAtomValue } from 'jotai'
import { Rocket, useGetRocketsQuery } from '../generated/graphql'
import QueryFilter from './QueryFilter'
import QuerySizeSelector from './QuerySizeSelector'
import RocketDataGrid from './RocketDataGrid'
import RocketQueryError from './RocketQueryError'
import { rocketDataAtom } from './State'

const RocketQuery = () => {
  const { data, loading, error } = useGetRocketsQuery({
    variables: { limit: useAtomValue(rocketDataAtom).limit },
  })

  return (
    <>
      <QuerySizeSelector />
      <QueryFilter />
      {loading ? <CircularProgress /> : undefined}
      {error ? <RocketQueryError error={error} /> : undefined}
      {data ? (
        <RocketDataGrid rocketData={data.rockets as Rocket[]} />
      ) : undefined}
    </>
  )
}

export default RocketQuery
