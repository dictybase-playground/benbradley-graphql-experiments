import { Paper } from '@mui/material'
import { Launch } from '../generated/graphql'

interface LaunchDataGridProperties {
  launchData: Launch[]
}

const LaunchDataGrid = ({ launchData }: LaunchDataGridProperties) => (
  <Paper elevation={4}>
    <div />
  </Paper>
)

export default LaunchDataGrid
