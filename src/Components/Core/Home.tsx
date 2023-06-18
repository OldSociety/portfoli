import Header from './Header'
import Footer from './Footer'
import Fireflies from '../Fireflies'
import Cards from '../Cards/Cards'
import AdjectiveRotator from '../AdjectiveRotator'

function Home() {
  return (
    <div className="main-container mx-auto">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div>
            <Header />
          </div>
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
          <div className="row">
            <a
              href="https://support.worldwildlife.org/site/Donation2?df_id=14597&14597.donation=form1&s_src=AWE1800OQ18510A01430RX"
              className="adjectives"
            >
              <AdjectiveRotator />
            </a>
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
