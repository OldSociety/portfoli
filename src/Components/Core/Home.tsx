import Header from './Header'
import Footer from './Footer'
// import Sections from '../Sections'
import Fireflies from '../Fireflies'
import Cards from '../Cards/Cards'

function Home() {
  return (
    <div className="main-container mx-auto">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div>
            <Header />
          </div>
          <div>
            I create user-friendly websites and digital experiences that are
            accessible to everyone.
          </div>
          {/* <div className="row">
            <Sections />
          </div> */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Footer />
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6 col-md-6 column2-container">
          <div className="column2-content">
            <div className="">
              <Cards />
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <Fireflies />
      </div>
    </div>
  )
}

export default Home
