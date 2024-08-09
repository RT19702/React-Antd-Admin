import React from 'react'
import ReactDOM from 'react-dom/client'
import "@/styles/reset.less";
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "@/redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  // React 严格模式
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
