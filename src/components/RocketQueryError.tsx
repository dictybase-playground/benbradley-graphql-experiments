import { ApolloError } from '@apollo/client'
import { Typography } from '@mui/material'

interface RocketQueryErrorProperties {
  error: ApolloError
}

const RocketQueryError = ({ error }: RocketQueryErrorProperties) => (
  <Typography>{`Error: ${error.message}`}</Typography>
)

export default RocketQueryError
