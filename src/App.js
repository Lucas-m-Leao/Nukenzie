import { useState } from 'react';
import TemplateInicial from './components/TemplateInicial';
import './App.css';
import Header from './components/Header';
import Form from './components/Form/Index';
import TotalPrice from './components/Total price';
import Filtro from './components/Filtro';
import Lista from './components/Lista';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
function App() {
  const [list, setList] = useState([])
  const [screen, setScreen] = useState(true)
  const [filtering, setfiltering] = useState("Todos")
  const screenChange = () => {
    setScreen(!screen)
  }
  return (
    <div className="App">
      {screen === true ? <TemplateInicial screenChange={screenChange} />
        :
        <>
          <Header screenChange={screenChange} />
          <div className='containerPrincipal'>
            <section>
              <Form setList={setList} list={list} filtering={setfiltering} />
              {list.length !== 0 && <TotalPrice list={list} />}
            </section>
            <main>
              <Filtro filtrar={setfiltering} filtering={filtering} />
              <ul id='ul'>
                <Lista filtering={filtering} list={list} setList={setList} />
              </ul>
            </main>
          </div>
        </>}
      <ToastContainer />
    </div>
  );
}

export default App;
