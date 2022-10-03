import { CircularProgress } from '@mui/material'
import { atom, useAtomValue } from 'jotai'
import { Rocket, useGetRocketsQuery } from '../generated/graphql'
import QueryFilter from './QueryFilter'
import QuerySizeSelector from './QuerySizeSelector'
import RocketDataGrid from './RocketDataGrid'
import RocketQueryError from './RocketQueryError'

interface RocketQueryState {
  limit: number
  filter: string
}

export const maxQuerySize: number = 20
export const rocketDataAtom = atom<RocketQueryState>({
  limit: maxQuerySize,
  filter: '',
})

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
