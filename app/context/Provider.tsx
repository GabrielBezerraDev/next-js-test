'use client'
import React, { useState } from 'react'
import { AppState, AppContext } from './AppContext'

interface Props {
  children: React.ReactNode
}

export const AppContextProvider: React.FunctionComponent<Props> = (props: Props): JSX.Element => {

  const [state, setState] = useState({})

  const updateState = (newState: Partial<AppState>) => {
    setState({ ...state, ...newState })
  }

  return (
    <AppContext.Provider value={{ ...state, updateState }}>{props.children}</AppContext.Provider>
  )
}