import logo from './logo.svg';
import style from './App.module.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';

function App() {
  return (
    <div className={style.app}>
      <Header/>
      <div className={style.container}>
        <Aside/>
      </div>
    </div>
  );
}

export default App;
