import { Link, TableBody, TableCell, TableRow } from '@mui/material'
import { Rocket } from '../generated/graphql'

interface RocketTableBodyProperties {
  data: Rocket[]
}

const RocketTableBody = ({ data }: RocketTableBodyProperties) => (
  <TableBody>
    {data.map((row: Rocket) => (
      <TableRow
        key={row.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.country}</TableCell>
        <TableCell align="left">{row.description}</TableCell>
        <TableCell align="left">
          <Link
            href={row.wikipedia ? (row.wikipedia as string) : 'N/A'}
            target="_blank">
            {row.wikipedia}
          </Link>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
)

export default RocketTableBody
