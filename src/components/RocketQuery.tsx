import { CircularProgress } from '@mui/material'
import { atom, useAtomValue } from 'jotai'
import { Rocket, useGetRocketsQuery } from '../generated/graphql'
import QuerySizeSelector from './QuerySizeSelector'
import RocketDataGrid from './RocketDataGrid'
import RocketQueryError from './RocketQueryError'

interface RocketQueryState {
  limit: number
}

export const rocketDataAtom = atom<RocketQueryState>({ limit: 5 })

const RocketQuery = () => {
  const { data, loading, error } = useGetRocketsQuery({
    variables: { limit: useAtomValue(rocketDataAtom).limit },
  })

  return (
    <>
      <QuerySizeSelector />
      {loading ? <CircularProgress /> : undefined}
      {error ? <RocketQueryError error={error} /> : undefined}
      {data ? (
        <RocketDataGrid rocketData={data.rockets as Rocket[]} />
      ) : undefined}
    </>
  )
}

export default RocketQuery
