import { mockGetRocketsQuery } from '../generated/graphql'
import mockRockets from './mockRockets'

const handlers = [
  mockGetRocketsQuery((request, response, context) => {
    const limit: number = request.variables.limit as number

    return response(
      context.data({
        rockets: mockRockets.rockets?.slice(0, limit),
      }),
    )
  }),
]

export default handlers
