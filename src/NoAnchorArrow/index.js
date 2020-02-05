import React, {useState} from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function NoAnchorArrow() {

  const [startDate, setStartDate] = useState(new Date())

  return (
    <div>

      <DatePicker 
          selected={startDate}
          onChange={date => setStartDate(date)}
          dateFormat='dd/MM/yyyy'     
          showPopperArrow={false}
      />

    </div>
  )
}

export default NoAnchorArrow
