import React from 'react';
import {Layout,Header,Navigation,Content,Drawer} from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom'
import './App.css'


function App() {  
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">Yonja Inc Portifolio</Link>}  scroll>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">Yonja Inc Portifolio</Link>}>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
