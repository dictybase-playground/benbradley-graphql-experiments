/* eslint-disable camelcase */
import { GetLaunchesQuery } from '../generated/graphql'

const mockLaunches: GetLaunchesQuery = {
  launches: [
    {
      id: '1',
      rocket: {
        rocket_name: 'Mock Rocket 1',
        rocket_type: 'v1.0',
      },
      links: {
        wikipedia: 'wikilink',
      },
      launch_date_local: '2022-01-06T14:06:00-04:00',
      launch_site: {
        site_name: 'CCAFS SLC 40',
      },
      mission_name: 'Mock Mission 1',
      launch_year: '2022',
    },
    {
      id: '2',
      rocket: {
        rocket_name: 'Mock Rocket 2',
        rocket_type: 'v1.2',
      },
      links: {
        wikipedia: 'wikilink',
      },
      launch_date_local: '2022-02-06T14:06:00-04:00',
      launch_site: {
        site_name: 'CCAFS SLC 41',
      },
      mission_name: 'Mock Mission 2',
      launch_year: '2022',
    },
    {
      id: '3',
      rocket: {
        rocket_name: 'Mock Rocket 3',
        rocket_type: 'v1.3',
      },
      links: {
        wikipedia: 'wikilink',
      },
      launch_date_local: '2022-03-06T14:06:00-04:00',
      launch_site: {
        site_name: 'CCAFS SLC 42',
      },
      mission_name: 'Mock Mission 3',
      launch_year: '2022',
    },
  ],
}

export default mockLaunches
