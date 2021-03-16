import style from './App.module.css';
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import {Component} from 'react'


class App extends Component {
  render(){
    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
        <Menu />
        <Main />
        </div>
      </div>
    );
  }
}

export default App;
