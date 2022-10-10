import { atom } from 'jotai'

// Query atom config
export const queryTypeOptions = [
  { type: 'launch', options: ['10', '20'] },
  { type: 'rocket', options: ['1', '2', '3', '4'] },
]

export const queryTypeAtom = atom(queryTypeOptions[0], (get, set, update) => {
  set(queryTypeAtom, update)
  get(queryTypeAtom)
})

// Rocket Query atom configs
export const limitOptions = ['1', '2', '3', '4']

export interface RocketQueryState {
  filter: string
}

export const rocketLimitAtom = atom(
  queryTypeOptions[0].options[0],
  (get, set, update) => {
    set(rocketLimitAtom, update)
  },
)

export const rocketLimitIntAtom = atom((get) =>
  Number.parseInt(get(rocketLimitAtom), 10),
)

export const rocketFilterAtom = atom<RocketQueryState>({
  filter: '',
})

// Launch Query atom configs
export const launchLimitOptions = ['10', '20', '30', '40']

export const launchLimitAtom = atom(
  launchLimitOptions[launchLimitOptions.length - 1],
  (get, set, update) => {
    set(launchLimitAtom, update)
    get(launchLimitAtom)
  },
)

export const launchLimitIntAtom = atom((get) =>
  Number.parseInt(get(launchLimitAtom), 10),
)

export const launchFilterAtom = atom('', (get, set, update) => {
  set(launchFilterAtom, update)
  get(launchFilterAtom)
})
