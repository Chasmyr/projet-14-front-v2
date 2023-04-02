import AddressForm from '../addressForm'
import PersonnalInfoForm from '../personnalInfoForm'
import './index.css'

const Form = ({setIsModalOpen}) => {

    return (
        <div className='form'>
            <h2 className='form-title'>Create Employee</h2>
            <PersonnalInfoForm />
            <AddressForm />
            <button className='form-button'>SAVE</button>
        </div>
    )
}

export default Form