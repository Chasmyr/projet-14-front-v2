import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateEmployee from "./pages/createEmployee"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
