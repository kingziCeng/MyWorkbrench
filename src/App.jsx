import { Layout, Menu } from 'antd';
import { ContainerOutlined, ApiFilled } from '@ant-design/icons'
function App() {
  const { Header, Content, Sider } = Layout;
  return (
    <Layout style={{height: '100vh', width: '100vw'}}>
      <Header style={{ display: 'flex' }}>
        <div style={{ color: 'white', width: '150px', 'font-size': '20px' }}>
          工作台
        </div>        
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
      <Layout>
        <Sider
            width={200}
        >
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
          <Content>123123</Content>
        </Layout>
      </Layout> 
    </Layout>
  )
}

export default App
