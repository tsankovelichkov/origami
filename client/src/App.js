import logo from './logo.svg';
import style from './App.module.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={style.app}>
      <Header/>
      <div className={style.container}>
        <Aside/>
        <Main />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
