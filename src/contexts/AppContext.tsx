/* eslint-disable no-unused-vars */
'use client'
import { ReactNode, createContext, useContext, useReducer } from 'react'
type State = {
  count: 0
}
export enum AppActions {
  increment,
  decrement,
}
type Action = {
  type: AppActions
  payload: any
}
type ContextType = {
  state: State
  dispatch: (action: Action) => void
}

type AppProviderProps = {
  children: ReactNode
}

const initialData: State = {
  count: 0,
}
const AppContext = createContext<ContextType | undefined>(undefined)

export const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case AppActions.increment:
      return { ...state, count: (state.count += action.payload) }
    case AppActions.decrement:
      return {
        ...state,
        count: state.count > 1 ? (state.count -= action.payload) : 1,
      }
    default:
      return state
  }
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialData)
  const value = { state, dispatch }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('Hook bad used')
  }
  return context
}
