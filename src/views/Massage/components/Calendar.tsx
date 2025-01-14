import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Helper function to get the last 7 days
  const getLast7Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      days.push({
        date:  date.getDate(),
        day: date.getDay(),
        isToday: i === 0,
      });
    }
    return days.reverse();
  };

  const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];

  const last7Days = getLast7Days();

  return (
    <View style={styles.container}>
      {last7Days.map((item, index) => (
        <View key={index} style={styles.dateContainer}>
          {item.isToday ? <Text style={styles.dayText}>{'今天'}</Text> : <Text style={styles.dayText}>{daysOfWeek[item.day]}</Text>}
          <TouchableOpacity
            style={[
              styles.numberContainer,
              selectedDate === item.date && styles.selectedNumberContainer,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text
              style={[
                styles.dateText,
                selectedDate === item.date && styles.selectedDateText,
              ]}
            >
              {item.date}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  dateContainer: {
    alignItems: 'center',
  },
  numberContainer: {
    marginTop: 5,
    alignItems: 'center',
    padding: 5,
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  selectedNumberContainer: {
    backgroundColor: '#007BFF',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  selectedDateText: {
    color: '#fff',
  },
  dayText: {
    fontSize: 14,
    color: '#647574',
  },
});

export default CalendarComponent;
