import { FC, useEffect, useState } from 'react'
import { useContext } from '@/app/store/useContent'
import { useNavigate } from 'react-router-dom'
import { RoutesEnum } from '@/app/router/routes'
import { LocalStorageKey, localStorageService } from '@/shared/services/localStorageService'
import logo from '@shared/assets/img/logo.png'
import cls from './Start.module.scss'

export const Start: FC = () => {
  const [introFinished, setIntroFinished] = useState<boolean>(false)
  const [allowContinue, setAllowContinue] = useState<boolean>(false)
  const { setStarted } = useContext()

  const navigate = useNavigate()

  const handleStart = (value: boolean) => {
    setStarted(value)
    navigate(RoutesEnum.root)
  }

  useEffect(() => {
    const savedStage = localStorageService.getItem(LocalStorageKey.STAGE)
    if (savedStage) {
      setAllowContinue(true)
      return
    } else {
      localStorageService.setItem(LocalStorageKey.STAGE, 0)
    }
  }, [])

  setTimeout(() => {
    setIntroFinished(true)
  }, 1000)
  console.log('introFinished', introFinished)

  return (
    <div className={cls.mainPageContainer}>
      <img className={cls.logo} src={logo} alt="logo" />
      <h1> Morbius Dream</h1>
      <h3>by Markizov S.</h3>

      <button onClick={() => handleStart(true)} className={`${introFinished ? cls.visible : ''}`}>
        {allowContinue ? 'Продолжить' : 'Начать'}
      </button>
    </div>
  )
}
