import { useState } from "react"
import './index.css'
import dayjs from "dayjs"

const DatePicker = ({onChange, format}) => {

    const [selectedDate, setSelectedDate] = useState('')

    const handleDateChange = (event) => {
        const newDate = event.target.value
        setSelectedDate(newDate)
        onChange(dayjs(newDate).format(format))
    }

    return (
        <div className="date-picker">
            <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="date-picker__input"
            />
      </div>
    )
}

export default DatePicker