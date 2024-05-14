import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import cls from './Layout.module.scss'

export const Layout: FC = () => {
  return (
    <main className={cls.layout}>
      <Outlet />
    </main>
  )
}
