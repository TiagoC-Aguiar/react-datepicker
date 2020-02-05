import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
// import './style.css'

function Default() {
 
  const [startDate, setStartDate] = useState(new Date())
    
  console.log('default')
  return (
    <div>
      padrão
      <DatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)} 
          dateFormat='dd/MM/yyyy'
          
        />
    </div>
  )
}

export default Default
