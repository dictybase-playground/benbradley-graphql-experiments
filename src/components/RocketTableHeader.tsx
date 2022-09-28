import { TableHead } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

const RocketTableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell align="left">Name</TableCell>
      <TableCell align="left">Country</TableCell>
      <TableCell align="left">Description</TableCell>
      <TableCell align="left">Wikipedia</TableCell>
    </TableRow>
  </TableHead>
)

export default RocketTableHeader
