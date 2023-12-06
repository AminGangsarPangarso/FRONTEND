import { Outlet } from 'react-router-dom'
import DetailNav from '../DetailNav'
import Footer from '../Footer'

function PublicLayout() {
  return (
    <>
      <DetailNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default PublicLayout
