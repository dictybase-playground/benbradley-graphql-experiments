import { makeStyles } from '@material-ui/styles'
import { FormControl, TextField } from '@mui/material'
import { useAtom } from 'jotai'
import { ChangeEvent } from 'react'
import { queryFilterAtom } from '../context/AtomConfigs'

const useStyles = makeStyles({
  filterFormControl: {
    margin: '10px',
  },
})

const QueryFilter = () => {
  const classes = useStyles()
  const [state, setFilter] = useAtom(queryFilterAtom)

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter({
      filter: event.target.value.toString(),
    })
  }

  return (
    <FormControl className={classes.filterFormControl}>
      <TextField
        aria-describedby="helper-text"
        label="Search"
        variant="filled"
        size="small"
        value={state.filter}
        onChange={handleFilterChange}
      />
    </FormControl>
  )
}

export default QueryFilter
