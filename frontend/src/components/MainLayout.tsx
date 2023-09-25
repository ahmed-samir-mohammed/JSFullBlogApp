import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout