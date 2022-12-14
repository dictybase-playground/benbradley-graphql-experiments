import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useAtom, useAtomValue } from 'jotai'
import { queryLimitAtom, queryTypeAtom } from '../context/AtomConfigs'

const QuerySizeSelector = () => {
  const { options } = useAtomValue(queryTypeAtom)
  const [limit, setLimit] = useAtom(queryLimitAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setLimit(event.target.value)
  }

  return (
    <FormControl size="small">
      <InputLabel id="select-small">Size</InputLabel>
      <Select
        labelId="select-small"
        id="select-small"
        value={limit}
        label="Rows"
        onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default QuerySizeSelector
