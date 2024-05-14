import { Route, Routes } from 'react-router-dom'
import { Content, Start } from '@/pages'
import { RoutesEnum } from './routes'
import { Layout } from '@/shared/ui'

export const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={RoutesEnum.root} index element={<Content />} />
        <Route path={RoutesEnum.start} index element={<Start />} />
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  )
}
