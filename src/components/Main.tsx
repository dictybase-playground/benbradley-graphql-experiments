import { makeStyles } from '@material-ui/styles'
import { Box } from '@mui/material'
import { useAtom } from 'jotai'
import { queryTypeAtom } from '../context/AtomConfigs'
import LaunchQuery from './LaunchQuery'
import QueryFilter from './QueryFilter'
import QuerySizeSelector from './QuerySizeSelector'
import QueryTypeSelector from './QueryTypeSelector'
import RocketQuery from './RocketQuery'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '8px',
  },
})

const Main = () => {
  const classes = useStyles()
  const [queryType] = useAtom(queryTypeAtom)

  return (
    <>
      <Box className={classes.container}>
        <QueryTypeSelector />
        <QueryFilter />
        <QuerySizeSelector />
      </Box>
      {queryType.type === 'launch' ? <LaunchQuery /> : undefined}
      {queryType.type === 'rocket' ? <RocketQuery /> : undefined}
    </>
  )
}

export default Main
