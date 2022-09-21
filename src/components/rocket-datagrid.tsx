import { Maybe, Rocket, RocketsResult } from '../generated/graphql'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'

function RocketDataGrid({ data }: RocketsResult) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Wikipedia</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: Maybe<Rocket>) => (
            <TableRow
              key={row?.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row?.name}
              </TableCell>
              <TableCell align="left">{row?.country}</TableCell>
              <TableCell align="left">{row?.description}</TableCell>
              <TableCell align="left">
                <Link
                  href={row?.wikipedia ? (row?.wikipedia as string) : 'N/A'}
                  target="_blank">
                  {row?.wikipedia}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RocketDataGrid
