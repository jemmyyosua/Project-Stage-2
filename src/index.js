import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { UserContextProvider } from "./context/userContext"
import reportWebVitals from "./reportWebVitals"

// import component
import App from './app'

const client = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
  <UserContextProvider>
    <QueryClientProvider client={client}>
        <Router>
          <App />
        </Router>
    </QueryClientProvider>
  </UserContextProvider>
</React.StrictMode>,
document.getElementById('root'))
  
reportWebVitals()





