import React from 'react';
import '../styles/styles.scss';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import Search from '../containers/SearchContainer';
import Results from "../containers/ResultsContainer";

function App() {
  return (
      <Provider store={store}>
        <div className="App flex-container-column">
          <Search/>
          <Results/>
        </div>
      </Provider>
  );
}

export default App;
