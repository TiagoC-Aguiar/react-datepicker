import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function SelectTimeOnly() {
  const [startDate, setStartDate] = useState(new Date())
  
  return (
    <div>
      
      <DatePicker 
          selected={startDate}
          onchange={date => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          dateFormat="HH:mm"
          timeIntervals={20}
          timeCaption="Hora"
      
      />

    </div>
  )
}

export default SelectTimeOnly

