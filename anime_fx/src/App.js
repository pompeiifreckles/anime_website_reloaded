import { Container, Header, Content, Footer } from 'rsuite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './Components/layout'
import Home from './Pages/Home'
import Error from './Pages/Error'

import './App.css';
//import 'rsuite/dist/styles/rsuite-default.css';
//import 'rsuite/lib/styles/index.less';
import 'rsuite/lib/styles/themes/dark/index.less';


function App() {
  return (
    <Container>
      <Router>
        <Header>
          <Layout />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={Error} />
          </Switch>
        </Content>
      </Router>
      <Footer>
        <div style={{height: '300px'}} />
      </Footer>
    </Container>
  );
}

export default App;
