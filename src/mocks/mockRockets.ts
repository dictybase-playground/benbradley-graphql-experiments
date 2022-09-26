import { GetRocketsQuery } from '../generated/graphql'

const mockRockets: GetRocketsQuery = {
  rockets: [
    {
      id: '1',
      name: 'Mock Rocket 1',
      wikipedia: 'wikilink',
      description: 'Description',
      country: 'United States',
      active: true,
    },
    {
      id: '2',
      name: 'Mock Rocket 2',
      wikipedia: 'wikilink',
      description: 'Description',
      country: 'Canada',
      active: true,
    },
    {
      id: '3',
      name: 'Mock Rocket 3',
      wikipedia: 'wikilink',
      description: 'Description',
      country: 'Europe',
      active: false,
    },
  ],
}

export default mockRockets
