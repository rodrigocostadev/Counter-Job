import React from 'react';
import './App.css';
import Box from './components/Box/Box';
import Projects from './components/Projects/Projects';
import Provider from './Context/Provider';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">

      <Provider>
        <div className='components'>
            <div className='boxcounter'>
                <Box></Box>
                <Counter></Counter>
            </div>
            <div className='projects' >
                <Projects></Projects>
            </div>        
        </div>
      </Provider>
      

      <div className="credits" >
          <p>Criado e Desenvolvido por <a target="blank" href="https://linktr.ee/rodrigocostadev">Rodrigo Costa</a></p>
      </div>

    </div>
  );
}

export default App;
