import { CircularProgress } from '@mui/material'
import { useSetAtom } from 'jotai'
import { rocketDataAtom } from '../../pages'
import { Rocket, useGetRocketsQuery } from '../generated/graphql'
import RocketDataGrid from './RocketDataGrid'

const RocketQuery = () => {
  const { data, loading } = useGetRocketsQuery({
    variables: { limit: 10 },
  })

  const setData = useSetAtom(rocketDataAtom)
  const setFetchedData = (payload: Rocket[]) => setData(payload)

  if (loading) {
    return <CircularProgress />
  }

  setFetchedData(data?.rockets as Rocket[])
  return <RocketDataGrid />
}

export default RocketQuery
