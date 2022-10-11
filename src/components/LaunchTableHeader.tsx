import { TableHead } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

const LaunchTableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell align="left">Mission Name</TableCell>
      <TableCell align="left">Rocket</TableCell>
      <TableCell align="left">Launch Site</TableCell>
      <TableCell align="left">Year</TableCell>
      <TableCell align="left">Wikipedia</TableCell>
    </TableRow>
  </TableHead>
)

export default LaunchTableHeader
