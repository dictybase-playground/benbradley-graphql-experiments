import { makeStyles } from '@material-ui/styles'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { ReactNode } from 'react'
import { maxQuerySize, rocketDataAtom } from './State'

const useStyles = makeStyles({
  sizeFormControl: {
    margin: '8px',
  },
})

const renderMenuItems = () => {
  const items: ReactNode[] = []

  for (let index = 1; index <= maxQuerySize; index += 1) {
    items.push(
      <MenuItem value={index} key={index}>
        {index}
      </MenuItem>,
    )
  }

  return items
}

const QuerySizeSelector = () => {
  const classes = useStyles()
  const state = useAtomValue(rocketDataAtom)
  const setAtomLimit = useSetAtom(rocketDataAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setAtomLimit({
      limit: Number.parseInt(event.target.value, 10),
      filter: state.filter,
    })
  }

  return (
    <FormControl className={classes.sizeFormControl} size="small">
      <InputLabel id="select-small">Size</InputLabel>
      <Select
        labelId="select-small"
        id="select-small"
        value={state.limit.toString()}
        label="Rows"
        onChange={handleChange}>
        {renderMenuItems()}
      </Select>
    </FormControl>
  )
}

export default QuerySizeSelector
