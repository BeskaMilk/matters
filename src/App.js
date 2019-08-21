import React, { Component} from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <div className="demo-big-content">
          <Layout>
          <Header className="header-color" title="Material Matters" scroll>
            <Navigation>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/register">Register</Link>
                <Link to="/logIn">Log in</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
