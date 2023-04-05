import { useState } from 'react'
import './index.css'

const Select = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const handleClick = () => {
        setIsDropDownOpen(!isDropDownOpen)
    }

    return (
        <div className='select'>
            <div className='select-header'>
                <div className='select-btn' onClick={handleClick}><span>Choose</span><div className='select-icon'>►</div></div>
            </div>
            {isDropDownOpen && 
                <div className='select-content'>
                    <div className='select-item'>
                        React
                    </div>
                    <div className='select-item'>
                        Vue
                    </div>
                    <div className='select-item'>
                        Angular
                    </div>
                    <div className='select-item'>
                        Typescript
                    </div>
                </div>
            }
        </div>
    )
}

export default Select