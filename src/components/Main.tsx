import { makeStyles } from '@material-ui/styles'
import { Box, Divider, Stack } from '@mui/material'
import { useAtom } from 'jotai'
import { queryTypeAtom } from '../context/AtomConfigs'
import LaunchQuery from './LaunchQuery'
import QueryFilter from './QueryFilter'
import QuerySizeSelector from './QuerySizeSelector'
import QueryTypeSelector from './QueryTypeSelector'
import RocketQuery from './RocketQuery'

const useStyles = makeStyles({
  container: {
    padding: '15px 25%',
  },
  bar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const Main = () => {
  const classes = useStyles()
  const [queryType] = useAtom(queryTypeAtom)

  return (
    <Box className={classes.container}>
      <Stack
        direction="row"
        spacing={1}
        className={classes.bar}
        divider={<Divider orientation="vertical" flexItem />}>
        <QueryFilter />
        <Stack direction="row" spacing={1}>
          <QueryTypeSelector />
          <QuerySizeSelector />
        </Stack>
      </Stack>
      <Box>
        {queryType.type === 'launch' ? <LaunchQuery /> : undefined}
        {queryType.type === 'rocket' ? <RocketQuery /> : undefined}
      </Box>
    </Box>
  )
}

export default Main
