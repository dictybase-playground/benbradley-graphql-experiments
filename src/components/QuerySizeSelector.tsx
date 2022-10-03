import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { ReactNode } from 'react'
import { maxQuerySize, rocketDataAtom } from './RocketQuery'

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
  const state = useAtomValue(rocketDataAtom)
  const setAtomLimit = useSetAtom(rocketDataAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setAtomLimit({
      limit: Number.parseInt(event.target.value, 10),
      filter: state.filter,
    })
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
