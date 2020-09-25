import React from 'react';
import { Provider } from "react-redux";
import ReduxStore from './Redux/store'

import Header from './Components/common/Header'
import Footer from './Components/common/Footer'
import Main from './Components/main/main'
import './App.css';

function App() {
  return (
    <Provider store={ReduxStore}>
      <Header />
      <Main />
      <Footer developer="Swagath PS" />

    </Provider>
  );
}

export default App;
