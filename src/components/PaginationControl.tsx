import { useAtom } from 'jotai'
import { makeStyles } from '@material-ui/styles'
import { Box, Button, Typography } from '@mui/material'
import { currentPageAtom } from '../context/AtomConfigs'

const useStyles = makeStyles({
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '8px',
  },
})

interface PaginationProperties {
  pageItemLimit: number
  totalItems: number
}

const PaginationControl = ({
  pageItemLimit,
  totalItems,
}: PaginationProperties) => {
  const classes = useStyles()
  const [page, setPage] = useAtom(currentPageAtom)
  const pageCount = Math.ceil(totalItems / pageItemLimit)

  const handlePreviousPage = () => {
    setPage((previous) => previous - 1)
  }

  const handleNextPage = () => {
    setPage((previous) => previous + 1)
  }

  return (
    <Box className={classes.pagination}>
      <Button onClick={handlePreviousPage}>Previous</Button>
      <Typography>
        {page} / {pageCount}
      </Typography>
      <Button onClick={handleNextPage}>Next</Button>
    </Box>
  )
}

export default PaginationControl
