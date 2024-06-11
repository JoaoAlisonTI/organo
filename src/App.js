import { useState } from 'react';
import { Banner } from './components/Banner';
import { Form } from './components/Form';

function App() {
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner />
      <Form 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
    </div>
  );
}

export default App;