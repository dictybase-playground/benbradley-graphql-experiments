import { makeStyles } from '@material-ui/styles'
import { FormControl, TextField } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { ChangeEvent } from 'react'
import { rocketFilterAtom } from '../context/AtomConfigs'

const useStyles = makeStyles({
  filterFormControl: {
    margin: '10px',
  },
})

const QueryFilter = () => {
  const classes = useStyles()
  const state = useAtomValue(rocketFilterAtom)
  const setAtomFilter = useSetAtom(rocketFilterAtom)

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAtomFilter({
      filter: event.target.value,
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
