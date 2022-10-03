
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Auth} from "./Auth"

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
    
  )
}

export default App