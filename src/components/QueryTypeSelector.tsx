import { makeStyles } from '@material-ui/styles'
import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { useAtom, useSetAtom } from 'jotai'
import {
  queryTypeAtom,
  queryTypeOptions,
  rocketLimitAtom,
} from '../context/AtomConfigs'

const useStyles = makeStyles({
  sizeFormControl: {
    margin: '8px',
  },
})

const QuerySelector = () => {
  const classes = useStyles()
  const [queryType, setQueryType] = useAtom(queryTypeAtom)
  const setLimit = useSetAtom(rocketLimitAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setQueryType(
      queryTypeOptions.find((option) => option.type === event.target.value),
    )

    setLimit(
      queryTypeOptions.find((option) => option.type === event.target.value)
        ?.options[0],
    )
  }

  return (
    <FormControl className={classes.sizeFormControl} size="small">
      <InputLabel id="select-small">Query</InputLabel>
      <Select
        labelId="select-small"
        id="select-small"
        value={queryType.type}
        label="Rows"
        onChange={handleChange}>
        {queryTypeOptions.map((option) => (
          <MenuItem key={option.type} value={option.type}>
            {option.type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default QuerySelector
