import { LocalStorageKey, localStorageService } from '@/shared/services/localStorageService'
import React, { useState } from 'react'

export function createContext<T>() {
  const context = React.createContext<T | undefined>(undefined)

  const useContext = () => {
    const value = React.useContext(context)
    if (value === undefined) {
      throw new Error(`useContext must be used inside a Provider with a value that's not undefined`)
    }
    return value
  }
  return [useContext, context.Provider] as const
}

type StateContextType = {
  started: boolean
  setStarted: React.Dispatch<React.SetStateAction<boolean>>
  stage: number
  setStage: React.Dispatch<React.SetStateAction<number>>
}

export const [useContext, Provider] = createContext<StateContextType>()

type ContextProviderProps = {
  children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const savedStage = localStorageService.getItem(LocalStorageKey.STAGE)
  
  const [started, setStarted] = useState(true)
  const [stage, setStage] = useState(savedStage ? +savedStage : 0)

  const initial = {
    started,
    setStarted,
    stage,
    setStage,
  }

  return <Provider value={initial}>{children}</Provider>
}
