import { makeStyles } from '@material-ui/styles'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { useAtom } from 'jotai'
import { limitOptions, rocketLimitAtom } from '../context/AtomConfigs'

const useStyles = makeStyles({
  sizeFormControl: {
    margin: '8px',
  },
})

const QuerySizeSelector = () => {
  const classes = useStyles()
  const [limit, setLimit] = useAtom(rocketLimitAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setLimit(event.target.value)
  }

  return (
    <FormControl className={classes.sizeFormControl} size="small">
      <InputLabel id="select-small">Size</InputLabel>
      <Select
        labelId="select-small"
        id="select-small"
        value={limit}
        label="Rows"
        onChange={handleChange}>
        {limitOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default QuerySizeSelector
