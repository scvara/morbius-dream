import { Route, Routes } from 'react-router-dom'
import { Content, Start } from '@/pages'
import { RoutesEnum } from './routes'
import { Layout } from '@/shared/ui'

export const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={RoutesEnum.root} index element={<Start />} />
        <Route path={RoutesEnum.content} index element={<Content />} />
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  )
}
