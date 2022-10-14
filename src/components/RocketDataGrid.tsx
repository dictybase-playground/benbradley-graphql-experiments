import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import RocketTableBody from './RocketTableBody'
import { Rocket } from '../generated/graphql'
import TableHeader from './TableHeader'

interface RocketDataGridProperties {
  rocketData: Rocket[]
  rocketHeaders: string[]
}

const RocketDataGrid = ({
  rocketData,
  rocketHeaders,
}: RocketDataGridProperties) => (
  <Paper elevation={4}>
    <TableContainer>
      <Table aria-label="simple table">
        <TableHeader headers={rocketHeaders} />
        <RocketTableBody data={rocketData} />
      </Table>
    </TableContainer>
  </Paper>
)

export default RocketDataGrid
