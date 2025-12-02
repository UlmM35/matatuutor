import ReactDOM from "react-dom/client"
import { setupAxiosInterceptors } from "./services/axiosConfig"
import App from "./App"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"
import { BrowserRouter as Router } from "react-router-dom"

setupAxiosInterceptors()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
)
