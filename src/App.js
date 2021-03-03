import React, { useState, useEffect } from 'react';
import './App.css';

import data from './data';

import CardDetails from './components/cardDetails';

import {AppBody, CardContainer} from './App.styles';

function App() {
  const [dataSets, setDataSets] = useState([]);

  useEffect(() => {

    let i = 0;
    
    while (i < data.length) {
      //add state to handle selection
      data[i]['clicked'] = false;
      i++;
    }

    setDataSets(data);
  }, []);

  return (
    <AppBody>
      <CardContainer>
      {dataSets.map((el)=>{
        return <CardDetails singleData={el} key={el.id}/>
      })}
      </CardContainer>
    </AppBody>
  );
}

export default App;
