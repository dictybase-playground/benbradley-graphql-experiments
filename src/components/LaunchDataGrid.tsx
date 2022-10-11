import { Paper, Table, TableContainer } from '@mui/material'
import { Launch } from '../generated/graphql'
import LaunchTableBody from './LaunchTableBody'
import LaunchTableHeader from './LaunchTableHeader'

interface LaunchDataGridProperties {
  launchData: Launch[]
}

const LaunchDataGrid = ({ launchData }: LaunchDataGridProperties) => (
  <Paper elevation={4}>
    <TableContainer>
      <Table aria-label="simple table">
        <LaunchTableHeader />
        <LaunchTableBody data={launchData} />
      </Table>
    </TableContainer>
  </Paper>
)

export default LaunchDataGrid
