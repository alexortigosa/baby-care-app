import React, {useState} from 'react'
import {View} from 'react-native'
import {Button} from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function DateTimePickerComponent({sendFunction}) {
  const [date, setDate] = useState(new Date(1598051730000))

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setDate(currentDate)
  }

  const onSend = () => {
    sendFunction(date)
  }

  return (
    <View>
      <DateTimePicker
        testID="TimePicker"
        value={date}
        mode="date"
        display="default"
        onChange={onChange}
      />
      <DateTimePicker
        testID="datePicker"
        value={date}
        mode="time"
        is24Hour
        display="default"
        onChange={onChange}
      />
      <View>
        <Button onPress={onSend} title="Enviar" />
      </View>
    </View>
  )
}
