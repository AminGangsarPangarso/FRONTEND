import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import PublicLayout from '@/Layout/Public'
import useAuth from '@/store/auth'
import { shallow } from 'zustand/shallow'

function DashboardLayout() {
  const [isAuthenticated] = useAuth((state) => [state.isAuthenticated], shallow)

  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login')
    }
  }, [isAuthenticated])

  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  )
}

export default DashboardLayout
