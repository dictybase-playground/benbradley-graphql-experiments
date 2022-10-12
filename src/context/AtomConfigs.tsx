import { atom } from 'jotai'

// Query atom config
export type QueryTypeOptions = {
  type: string
  options: string[]
  headers: string[]
}

export const queryTypeOptions: QueryTypeOptions[] = [
  {
    type: 'launch',
    options: ['5', '10', '20', '40'],
    headers: ['Mission Name', 'Rocket', 'Launch Site', 'Year', 'Wikipedia'],
  },
  {
    type: 'rocket',
    options: ['1', '2', '3', '4'],
    headers: ['Name', 'Country', 'Description', 'Wikipedia'],
  },
]

export const queryTypeAtom = atom(queryTypeOptions[0], (get, set, update) => {
  set(queryTypeAtom, update)
  get(queryTypeAtom)
})

export interface RocketQueryState {
  filter: string
}

export const queryLimitAtom = atom(
  queryTypeOptions[0].options[0],
  (get, set, update) => {
    set(queryLimitAtom, update)
  },
)

export const queryLimitIntAtom = atom((get) =>
  Number.parseInt(get(queryLimitAtom), 10),
)

export const queryFilterAtom = atom<RocketQueryState>({
  filter: '',
})
