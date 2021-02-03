import React from 'react'
import { GlobalStyles } from './style/GlobalStyles'

import Navbar from './components/Navbar/index'
import Banner from './components/Banner/index'
import Promo from './components/Promo/index'
import TechSpecs from './components/TechSpecs/index'
import PromoDois from './components/Promo-Dois/index'
import Depoimentos from './components/Depoimentos/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <>
        <Navbar />
        <Banner />

        <Promo />

        <TechSpecs/>

        <PromoDois />
        <Depoimentos />

        <Footer />

        <GlobalStyles />
    </>
  );
}

export default App;
