'use client'
import React, { useState } from 'react'
import { AppState, AppContext} from './AppContext'

interface Props {
  children: React.ReactNode
}

export const AppContextProvider: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const [data, setUpdate] = useState<Partial<AppState>>({data:{nome:"Gabriel"}});
  return (
    <AppContext.Provider value={{ ...data, setUpdate }}>{props.children}</AppContext.Provider>
  )
}