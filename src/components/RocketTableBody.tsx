import { makeStyles } from '@material-ui/styles'
import { Link, TableBody, TableCell, TableRow } from '@mui/material'
import { useAtomValue } from 'jotai'
import { Rocket } from '../generated/graphql'
import { queryFilterAtom } from '../context/AtomConfigs'

const useStyles = makeStyles({
  tableRow: {
    '&:last-child td, &:last-child th': { border: 0 },
  },
})

interface RocketTableBodyProperties {
  data: Rocket[]
}

const RocketTableBody = ({ data }: RocketTableBodyProperties) => {
  const classes = useStyles()
  const state = useAtomValue(queryFilterAtom)

  return (
    <TableBody>
      {data
        .filter((element: Rocket) =>
          element.name
            ?.toLowerCase()
            .includes(state.filter.toString().toLowerCase()),
        )
        .map((row: Rocket) => (
          <TableRow key={row.id} className={classes.tableRow}>
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
}

export default RocketTableBody
