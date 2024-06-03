import React from 'react';
import './App.css'
import Card from './components/Card';

const App = () => {
  return (
    <div className="app">
      <Card
        titulo="Godzila New Empire"
        texto="Click para mudar a cor do Card do Godzila."
        imagem="https://rollingstone.uol.com.br/media/uploads/godzilla_e_kong_o_novo_imperio_estreia_nos_cinemas_brasileiros.jpg"
      />
    </div>
  );
};

export default App;
