import { CircularProgress } from '@mui/material'
import { useSetAtom } from 'jotai'
import { rocketDataAtom } from '../../pages'
import { Rocket, useGetRocketsQuery } from '../generated/graphql'
import RocketDataGrid from './RocketDataGrid'
import RocketQueryError from './RocketQueryError'

const RocketQuery = () => {
  const { data, loading, error } = useGetRocketsQuery({
    variables: { limit: 10 },
  })

  const setData = useSetAtom(rocketDataAtom)
  const setFetchedData = (payload: Rocket[]) => setData(payload)

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return <RocketQueryError error={error} />
  }

  setFetchedData(data?.rockets as Rocket[])
  return <RocketDataGrid />
}

export default RocketQuery
