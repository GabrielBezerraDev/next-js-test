import React from 'react'

type IGenericData = Record<any,any>;

export interface AppState {
  data?: IGenericData
  updateState: (newState: Partial<AppState>) => void
}

const defaultState: AppState = {
  data: {},
  updateState: (newState?: Partial<AppState>) => {},
}

export const AppContext = React.createContext<AppState>(defaultState)