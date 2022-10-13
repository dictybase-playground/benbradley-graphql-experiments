import { CircularProgress } from '@mui/material'
import { useAtom, useAtomValue } from 'jotai'
import {
  currentPageAtom,
  queryLimitIntAtom,
  queryTypeAtom,
} from '../context/AtomConfigs'
import { Launch, useGetLaunchesQuery } from '../generated/graphql'
import LaunchDataGrid from './LaunchDataGrid'
import PaginationControl from './PaginationControl'
import QueryError from './QueryError'

const pageSize = 10

const LaunchQuery = () => {
  const [limit] = useAtom(queryLimitIntAtom)
  const [page] = useAtom(currentPageAtom)
  const { headers } = useAtomValue(queryTypeAtom)
  const { data, loading, error } = useGetLaunchesQuery({
    variables: { limit, offset: page * limit },
  })

  return (
    <>
      {loading ? <CircularProgress /> : undefined}
      {error ? <QueryError error={error} /> : undefined}
      {data ? (
        <>
          <PaginationControl
            pageItemLimit={pageSize}
            totalItems={data.launches?.length as number}
          />
          <LaunchDataGrid
            launchData={data.launches as Launch[]}
            launchHeaders={headers}
          />
        </>
      ) : undefined}
    </>
  )
}

export default LaunchQuery
