import './css/App.css';

import React from 'react';
import Header from './components/Header';
import TextField from './components/TextField';
import ButtonPanel from './components/ButtonPanel';
import DayOfWeek from './components/DayOfWeek';
import Timer from './components/Timer';

function App() {

  let version = React.version;

  return (
    <div className="App">
      <Header title="Notre Premier Composant React" version={version} />
      <TextField label="Identificateur" size="10"/>
      <TextField label="Designation" size="30"/>
      <TextField label="Prix" size="15"/>
      <DayOfWeek/>
      <Timer/>
      <ButtonPanel labels={['Enregistrer','Supprimer','Annuler']} />
    </div>
  );
}

export default App;
