import { CircularProgress } from '@mui/material'
import { useAtom } from 'jotai'
import { launchLimitIntAtom } from '../context/AtomConfigs'
import { Launch, useGetLaunchesQuery } from '../generated/graphql'
import LaunchDataGrid from './LaunchDataGrid'
import QueryError from './QueryError'

const LaunchQuery = () => {
  const [limit] = useAtom(launchLimitIntAtom)
  const { data, loading, error } = useGetLaunchesQuery({
    variables: { limit },
  })

  return (
    <>
      {loading ? <CircularProgress /> : undefined}
      {error ? <QueryError error={error} /> : undefined}
      {data ? (
        <LaunchDataGrid launchData={data.launches as Launch[]} />
      ) : undefined}
    </>
  )
}

export default LaunchQuery
