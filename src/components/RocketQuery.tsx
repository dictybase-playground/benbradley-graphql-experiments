import { CircularProgress } from '@mui/material'
import { atom, useSetAtom } from 'jotai'
import { Rocket, useGetRocketsQuery } from '../generated/graphql'
import RocketDataGrid from './RocketDataGrid'
import RocketQueryError from './RocketQueryError'

export const rocketDataAtom = atom<Rocket[]>([])

const RocketQuery = () => {
  const { data, loading, error } = useGetRocketsQuery({
    variables: { limit: 10 },
  })
  const setData = useSetAtom(rocketDataAtom)
  const setFetchedData = (payload: Rocket[]) => setData(payload)

  setFetchedData(data?.rockets as Rocket[])

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <RocketQueryError error={error} />
      ) : (
        <RocketDataGrid />
      )}
    </div>
  )
}

export default RocketQuery
