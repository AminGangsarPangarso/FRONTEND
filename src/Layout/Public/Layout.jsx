import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'

function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default PublicLayout
