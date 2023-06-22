import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Fireflies from '../Fireflies';
import Cards from '../Cards/Cards';
import AdjectiveRotator from '../AdjectiveRotator';

function Home() {
  return (
    <div className="main-container mx-auto">
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <Header />
          <Footer />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6 col-md-12 column2-container">
          <div className="column2-content">
          <div className="row">
              <a href="https://support.worldwildlife.org/site/Donation2?df_id=14597&14597.donation=form1&s_src=AWE1800OQ18510A01430RX" className="adjectives">
                <AdjectiveRotator />
              </a>
            </div>
            <div className="cards">
              <Cards />
            </div>
          </div>
        </div>
      </div>
      <div className="fireflies-container">
        <Fireflies />
      </div>
    </div>
  );
}

export default Home;
