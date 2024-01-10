import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import PublicLayout from '@/Layout/Public'
import useAuth from '@/store/auth'
import { shallow } from 'zustand/shallow'

function DashboardLayout() {
  const [auth] = useAuth((state) => [state.auth], shallow)

  const navigate = useNavigate()
  useEffect(() => {
    if (!auth) {
      navigate('/login')
    }
  }, [auth])

  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  )
}

export default DashboardLayout
