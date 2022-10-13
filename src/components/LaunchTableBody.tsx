import { makeStyles } from '@material-ui/styles'
import { Link, TableBody, TableCell, TableRow } from '@mui/material'
import { useAtomValue } from 'jotai'
import { queryFilterAtom } from '../context/AtomConfigs'
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
  const state = useAtomValue(queryFilterAtom)

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
            <TableCell align="left">{row.rocket?.rocket_name}</TableCell>
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
