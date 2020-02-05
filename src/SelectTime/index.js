import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'


function SelectTime() {

  const [startDate, setStartDate] = useState(new Date())

  return (
    <div>

      <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="Hora"
          dateFormat="dd/MM/yyyy"

      />

    </div>
  )
}

export default SelectTime
