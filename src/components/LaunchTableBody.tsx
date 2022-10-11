import { makeStyles } from '@material-ui/styles'
import { Link, TableBody, TableCell, TableRow } from '@mui/material'
import { useAtomValue } from 'jotai'
import { rocketFilterAtom } from '../context/AtomConfigs'
import { Launch } from '../generated/graphql'

const useStyles = makeStyles({
  tableRow: {
    '&:last-child td, &:last-child th': { border: 0 },
  },
})

interface LaunchTableBodyProperties {
  data: Launch[]
}

const LaunchTableBody = ({ data }: LaunchTableBodyProperties) => {
  const classes = useStyles()
  const state = useAtomValue(rocketFilterAtom)

  return (
    <TableBody>
      {data
        .filter((element: Launch) =>
          element.mission_name
            ?.toLowerCase()
            .includes(state.filter.toLowerCase()),
        )
        .map((row: Launch) => (
          <TableRow key={row.id} className={classes.tableRow}>
            <TableCell align="left">{row.mission_name}</TableCell>
            <TableCell component="th" scope="row">
              {row.rocket?.rocket_name}
            </TableCell>
            <TableCell align="left">{row.launch_site?.site_name}</TableCell>
            <TableCell align="left">{row.launch_year}</TableCell>
            <TableCell align="left">
              <Link
                href={
                  row.links?.wikipedia
                    ? (row.links?.wikipedia as string)
                    : 'N/A'
                }
                target="_blank">
                {row.links?.wikipedia}
              </Link>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  )
}

export default LaunchTableBody
