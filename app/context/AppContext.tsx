import React from 'react'

export type IGenericData = Record<any,any>;

export interface AppState {
  data?: IGenericData
  setUpdate: (data:IGenericData) => void
}

export const AppContext = React.createContext<Partial<AppState>>({})
