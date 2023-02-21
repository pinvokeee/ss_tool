import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { MainContainer } from './features/container/MainContainer';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <MainContainer />
      </RecoilRoot>
    </div>
  );
}

export default App;
