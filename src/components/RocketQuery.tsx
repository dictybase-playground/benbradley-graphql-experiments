import { makeStyles } from '@material-ui/styles'
import { Box, CircularProgress } from '@mui/material'
import { useAtomValue } from 'jotai'
import { Rocket, useGetRocketsQuery } from '../generated/graphql'
import QueryFilter from './QueryFilter'
import QuerySizeSelector from './QuerySizeSelector'
import RocketDataGrid from './RocketDataGrid'
import RocketQueryError from './RocketQueryError'
import { rocketDataAtom } from './State'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '8px',
  },
})

const RocketQuery = () => {
  const classes = useStyles()
  const { data, loading, error } = useGetRocketsQuery({
    variables: { limit: useAtomValue(rocketDataAtom).limit },
  })

  return (
    <>
      <Box className={classes.container}>
        <QueryFilter />
        <QuerySizeSelector />
      </Box>
      {loading ? <CircularProgress /> : undefined}
      {error ? <RocketQueryError error={error} /> : undefined}
      {data ? (
        <RocketDataGrid rocketData={data.rockets as Rocket[]} />
      ) : undefined}
    </>
  )
}

export default RocketQuery
