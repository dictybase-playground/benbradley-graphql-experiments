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

const Pagination = ({ pageItemLimit, totalItems }: PaginationProperties) => {
  const classes = useStyles()
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom)
  const pageCount = Math.ceil(totalItems / pageItemLimit)

  const handlePreviousPage = () => {
    setCurrentPage(Math.min(currentPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, pageCount))
  }

  return (
    <Box className={classes.pagination}>
      <Button onClick={handlePreviousPage}>Previous</Button>
      <Typography>
        {currentPage} / {pageCount}
      </Typography>
      <Button onClick={handleNextPage}>Next</Button>
    </Box>
  )
}

export default Pagination
