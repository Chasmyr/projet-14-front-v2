import { connect } from "react-redux"

const CreateEmployee = ({employees = null}) => {

    return (
        <>
            <h1>Test</h1>
        </>  
    )
}

export default connect(
    state => ({
        employees: state.employeeReducer.employees
    })
)(CreateEmployee)