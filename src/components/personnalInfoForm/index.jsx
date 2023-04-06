import DatePicker from "../datePicker"
import Select from "../select"
import './index.css'
import { useState } from "react"

const PersonnalInfoForm = () => {

    const [selectValue, setSelectValue] = useState('')
    const [dateValue, setDateValue] = useState('')

    const handleSelect = (value) => {
        setSelectValue(value)
    }

    const handleDatePicker = (value) => {
        setDateValue(value)
    }

    const selectData = [
        {
            "name": "Sales",
            "value": "Sales"
        },
        {
            "name": "Marketing",
            "value": "Marketing"
        },
        {
            "name": "Engineering",
            "value": "Engineering"
        },
        {
            "name": "Human Resources",
            "value": "HR"
        },
        {
            "name": "Legal",
            "value": "Legal"
        }
    ]

    console.log(dateValue)

    return (
        <>
            <span>Personnal Info</span>
            <div className="grid-item">
                <Select options={selectData} optionValue={"value"} optionLabel={"name"} defaultValue={""} onChange={handleSelect} placeholder={"Departement"} />
            </div>
            <div className="grid-item">
                <DatePicker onChange={handleDatePicker} format={"MM-DD-YYYY"} />
            </div>
        </>
    )
}

export default PersonnalInfoForm