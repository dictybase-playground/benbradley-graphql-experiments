import { FormControl, Box, TextField } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { ChangeEvent } from 'react'
import { rocketDataAtom } from './RocketQuery'

const QueryFilter = () => {
  const state = useAtomValue(rocketDataAtom)
  const setAtomFilter = useSetAtom(rocketDataAtom)

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAtomFilter({
      limit: state.limit,
      filter: event.target.value,
    })
  }

  return (
    <FormControl sx={{ margin: '10px' }}>
      <Box display="flex" sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextField
          aria-describedby="helper-text"
          label="Search"
          variant="filled"
          size="small"
          value={state.filter}
          onChange={handleFilterChange}
        />
      </Box>
    </FormControl>
  )
}

export default QueryFilter
