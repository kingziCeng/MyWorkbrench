import React from 'react';
import Router from './router'
import { Layout } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import './APP.css'
import Topbar from './Components/Topbar';

function App() {
  return (
    <Layout>
      <Header className='top-nav'>
        <Topbar></Topbar>
      </Header>
        <Layout>
          <Sider className='side-nav'>
            <span style={{ color: 'white' }}>2</span>
          </Sider>
          <Content style={{ 'padding': '20px 20px' }}>
            <Router></Router>
          </Content>
        </Layout>
    </Layout>
  )
}

export default App
