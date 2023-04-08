import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateEmployee from "./pages/createEmployee"
import EmployeeList from "./pages/employeeList"
import ErrorPage from "./pages/error"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/list" element={<CreateEmployee />} />CreateEmployee
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
