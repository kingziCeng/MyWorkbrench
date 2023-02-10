import React from 'react';
import Router from './router'
import { Layout } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import './APP.css'

function App() {
  return (
    <Layout>
      <Header className='top-nav'>
        <span style={{ color: 'white' }}>2</span> 
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
