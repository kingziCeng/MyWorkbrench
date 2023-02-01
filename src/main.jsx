import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import App from './App'
import './index.css'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#2123bf'
      }
    }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
