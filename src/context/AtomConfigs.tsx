import { atom } from 'jotai'

// Rocket Query atom configs
export const limitOptions = ['1', '2', '3', '4']

export interface RocketQueryState {
  filter: string
}

export const rocketLimitAtom = atom(
  limitOptions[limitOptions.length - 1],
  (get, set, update) => {
    set(rocketLimitAtom, update)
    get(rocketLimitAtom)
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
