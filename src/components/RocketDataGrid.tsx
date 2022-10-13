import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import RocketTableBody from './RocketTableBody'
import { Rocket } from '../generated/graphql'
import RocketTableHeader from './RocketTableHeader'

interface RocketDataGridProperties {
  rocketData: Rocket[]
}

const RocketDataGrid = ({ rocketData }: RocketDataGridProperties) => (
  <Paper elevation={4}>
    <TableContainer>
      <Table aria-label="simple table">
        <RocketTableHeader />
        <RocketTableBody data={rocketData} />
      </Table>
    </TableContainer>
  </Paper>
)

export default RocketDataGrid
