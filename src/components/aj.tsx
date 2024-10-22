import React, { useState } from 'react';
import { View, Button, DatePickerAndroid } from 'react-native';

const DateSelectionComponent = ({ onDateChange }: { onDateChange: (date: Date) => void }) => {
  const [date, setDate] = useState(new Date());

  const showDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: date,
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        setDate(selectedDate);
        onDateChange(selectedDate);
      }
    } catch (error) {
      console.warn('Error picking date: ', error);
    }
  };

  return (
    <View>
      <Button title="Select Date" onPress={showDatePicker} />
    </View>
  );
};

export default DateSelectionComponent;
