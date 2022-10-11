import { Paper, Table, TableContainer } from '@mui/material'
import { Launch } from '../generated/graphql'
import LaunchTableBody from './LaunchTableBody'
import TableHeader from './TableHeader'

interface LaunchDataGridProperties {
  launchData: Launch[]
  launchHeaders: string[]
}

const LaunchDataGrid = ({
  launchData,
  launchHeaders,
}: LaunchDataGridProperties) => (
  <Paper elevation={4}>
    <TableContainer>
      <Table aria-label="simple table">
        <TableHeader headers={launchHeaders} />
        <LaunchTableBody data={launchData} />
      </Table>
    </TableContainer>
  </Paper>
)

export default LaunchDataGrid
