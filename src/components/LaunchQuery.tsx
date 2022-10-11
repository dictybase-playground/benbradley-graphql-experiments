import { CircularProgress } from '@mui/material'
import { useAtom, useAtomValue } from 'jotai'
import { queryLimitIntAtom, queryTypeAtom } from '../context/AtomConfigs'
import { Launch, useGetLaunchesQuery } from '../generated/graphql'
import LaunchDataGrid from './LaunchDataGrid'
import QueryError from './QueryError'

const LaunchQuery = () => {
  const [limit] = useAtom(queryLimitIntAtom)
  const { headers } = useAtomValue(queryTypeAtom)
  const { data, loading, error } = useGetLaunchesQuery({
    variables: { limit },
  })

  return (
    <>
      {loading ? <CircularProgress /> : undefined}
      {error ? <QueryError error={error} /> : undefined}
      {data ? (
        <LaunchDataGrid
          launchData={data.launches as Launch[]}
          launchHeaders={headers}
        />
      ) : undefined}
    </>
  )
}

export default LaunchQuery
