import { connect } from "react-redux"
import './index.css'
import Header from "../../components/header"
import Form from "../../components/form"
import {useState} from "react"

const CreateEmployee = ({employees = null}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Header />
            {isModalOpen &&
                <div className="modal">

                </div>
            }
            <div className="form-container">
                <Form setIsModalOpen={setIsModalOpen} />
            </div>
        </>  
    )
}

export default connect(
    state => ({
        employees: state.employeeReducer.employees
    })
)(CreateEmployee)