import { useState } from 'react'
import TextField from '../formComponents/textField'
import './index.css'
import DatePicker from '../formComponents/datePicker'
import Select from '../formComponents/select'
import { selectData, states } from '../../data/state'

const Form = ({setIsModalOpen}) => {

    const [firstnameValue, setFirstnameValue] = useState('')
    const [lastnameValue, setLastNameValue] = useState('')
    const [dateOfBirthValue, setDateOfBirthValue] = useState('')
    const [startDateValue, setStartDateValue] = useState('')
    const [departementValue, setDepartementValue] = useState('')
    const [streetValue, setStreetValue] = useState('')
    const [cityValue, setCityValue] = useState('')
    const [zipCodeValue, setZipCodeValue] = useState('')
    const [stateValue, setStateValue] = useState('')

    const handleFirstName = (value) => {
        setFirstnameValue(value)
    }

    const handleLastName = (value) => {
        setLastNameValue(value)
    }

    const handleDateOfBirth = (value) => {
        setDateOfBirthValue(value)
    }

    const handleStartDate = (value) => {
        setStartDateValue(value)
    }

    const handleDepartement = (value) => {
        setDepartementValue(value)
    }

    const handleStreet = (value) => {
        setStreetValue(value)
    }

    const handleCity = (value) => {
        setCityValue(value)
    }

    const handleZipCode = (value) => {
        setZipCodeValue(value)
    }

    const handleState = (value) => {
        setStateValue(value)
    }

    const format = "MM-DD-YYYY"

    return (
        <div className='form'>
            <h2 className='form-title'>Create Employee</h2>
            <div className='form-wrapper'>
                <h2 className='form-section-title'>Employee Informations</h2>
                <div className='personnal-info'>
                    <div className='firstname-input'>
                        <TextField label="First Name" onChange={handleFirstName} />
                    </div>
                    <div className='lastname-input'>
                        <TextField label="Last Name" onChange={handleLastName} />
                    </div>
                    <div className='date-of-birth-input'>
                        <DatePicker label="Date Of Birth" format={format} onChange={handleDateOfBirth} />
                    </div>
                    <div className='start-date-input'>
                        <DatePicker label="Start Date" format={format} onChange={handleStartDate} />
                    </div>
                    <div className='departement-input'>
                        <Select defaultValue={departementValue} options={selectData} optionValue={"value"} optionLabel={"name"} placeholder={"Departement"} onChange={handleDepartement}/>
                    </div>
                </div>
                <h2 className='form-section-title'>Employee Address</h2>
                <div className='address-info'>
                    <div className='street-input'>
                        <TextField label="Steet" onChange={handleStreet} />
                    </div>
                    <div className='city-input'>
                        <TextField label="City" onChange={handleCity} />
                    </div>
                    <div className='zipcode-input'>
                        <TextField label="Zip Code" onChange={handleZipCode} />
                    </div>
                    <div className='state-input'>
                        <Select defaultValue={stateValue} options={states} optionValue={"abbreviation"} optionLabel={"name"} placeholder={"State"} onChange={handleState}/>
                    </div>
                </div>
                <div className='action-container'>
                    <button className='form-button'>SAVE</button>
                </div>
            </div>
        </div>
    )
}

export default Form