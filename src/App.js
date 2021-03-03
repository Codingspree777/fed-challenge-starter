import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import data from './data';
import CardDetails from './components/cardDetails';

import { AppBody, CardContainer } from './App.styles';

function App() {
  const [dataSets, setDataSets] = useState([]);

  useEffect(() => {
    let i = 0;

    while (i < data.length) {
      //add object properties to handle selection
      data[i]['clicked'] = false;
      i++;
    }

    setDataSets(data);
  }, []);

  const handleCardSelection = id => {
    setDataSets(
      dataSets.map(data => {
        if (data.id === id) {
          return {
            ...data,
            clicked: !data.clicked
          };
        }
        return data;
      })
    );
  };

  return (
    <AppBody>
      <CardContainer>
        {dataSets.map(el => {
          return (
            <CardDetails
              singleData={el}
              key={el.id}
              cardSelection={handleCardSelection}
            />
          );
        })}
      </CardContainer>
    </AppBody>
  );
}

App.propTypes = {
  dataSets: PropTypes.array
};

export default App;
