import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function route() {
  return (
    <>
          <Header />
          <Outlet />
          {/* // outlet is used to render the child routes inside the parent route  it means */}
          <Footer/>
    </>
  )
}

export default route
