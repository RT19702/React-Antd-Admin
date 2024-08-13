import React from 'react'
import ReactDOM from 'react-dom/client'
import "@/styles/reset.less";
import App from './App.jsx'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store,persistor } from "@/redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  // React 严格模式
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
