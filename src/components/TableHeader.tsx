import { TableHead } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

interface TableHeaderProperties {
  headers: string[]
}

const TableHeader = ({ headers }: TableHeaderProperties) => (
  <TableHead>
    <TableRow>
      {headers.map((header) => (
        <TableCell key={header} align="left">
          {header}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
)

export default TableHeader
