import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './Components/layout'
import Home from './Pages/Home'

import './App.css';
//import 'rsuite/dist/styles/rsuite-default.css';
//import 'rsuite/lib/styles/index.less';
import 'rsuite/lib/styles/themes/dark/index.less';


function App() {
  return (
    <div className="App">
      <Layout />
      {/* <div style={{width: '100%', display: 'flex', flexDirection: 'column ', justifyContent:'center', alignItems: 'center', margin: '5vh 0 0 0'}}> */}
      <Home />
      {/* </div> */}
    </div>
  );
}

export default App;
