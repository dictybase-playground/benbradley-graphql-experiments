import { ApolloError } from '@apollo/client'
import { Typography } from '@mui/material'

interface QueryErrorProperties {
  error: ApolloError
}

const QueryError = ({ error }: QueryErrorProperties) => (
  <Typography>{`Error: ${error.message}`}</Typography>
)

export default QueryError
