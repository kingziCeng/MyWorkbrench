import { Layout, Menu, Space } from 'antd';
import { ContainerOutlined, ApiFilled, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React from 'react';
import { useState } from 'react';
function App() {
  const { Header, Content, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{height: '100vh', width: '100vw'}}>
        <Sider
            width={200}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', 'fontSize': '20px', height: '64px', 'lineHeight': '64px' }}>
              <div width={ 90 } style={{ textAlign: 'center', flexGrow: '2' }}>
                <span>工作台</span>
              </div>
          </div>
          <Menu
            mode="inline"
            style={{
              height: '100%',
              borderRight: 0,
            }}
            defaultSelectedKeys={['planeDate']}
            items={[
              {
                key: "planeDate",
                label: '计划日历',
                icon: <ContainerOutlined />
              },
              {
                key: "planeLine",
                label: '计划时间线',
                icon: <ApiFilled />
              }, 
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ display: 'flex', paddingInline: '10px' }}>
            <span style= {{ color: 'white', marginRight: '10px' }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </span>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['workbrench']}
              items={[
                {
                  key: 'workbrench',
                  label: '我的工作台'
                }
              ]}
            />
          </Header>
          <Content>123123</Content>
        </Layout> 
    </Layout>
  )
}

export default App
