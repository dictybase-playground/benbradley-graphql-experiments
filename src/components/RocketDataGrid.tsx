import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import TableHeaderRow from './RocketTableHeader'
import RocketTableBody from './RocketTableBody'
import { Rocket } from '../generated/graphql'

interface RocketDataGridProperties {
  rocketData: Rocket[]
}

const RocketDataGrid = ({ rocketData }: RocketDataGridProperties) => (
  <Paper elevation={4}>
    <TableContainer>
      <Table aria-label="simple table">
        <TableHeaderRow />
        <RocketTableBody data={rocketData} />
      </Table>
    </TableContainer>
  </Paper>
)

export default RocketDataGrid
