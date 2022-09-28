import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { useAtomValue } from 'jotai'
import { rocketDataAtom } from '../../pages'
import TableHeaderRow from './RocketTableHeader'
import RocketTableBody from './RocketTableBody'

const RocketDataGrid = () => {
  const state = useAtomValue(rocketDataAtom)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeaderRow />
        <RocketTableBody data={state} />
      </Table>
    </TableContainer>
  )
}

export default RocketDataGrid
