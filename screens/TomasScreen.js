import * as React from 'react'
import {StyleSheet, Text, View, FlatList, StatusBar} from 'react-native'
import {format} from 'date-fns'

import DateTimePickerComponent from '../components/DateTimePickerComponent'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import domain from '../instance'

const Item = ({title, isRigth}) => (
  <View style={styles.item}>
    <FontAwesomeIcon icon="syringe" color="yellow" size={32} />
    <Text style={styles.title}>{title}</Text>
    <Text> Toma {isRigth ? 'Derecha' : 'Izquierda'}</Text>
  </View>
)

export default function TomasScreen() {
  const [tomasList, setTomasList] = React.useState([])
  const [date, setDate] = React.useState(Date.now())
  React.useEffect(() => {
    console.log('use effect get cacas')
    async function getCacas() {
      console.log('get tomas')
      const {list} = await domain.get('get_toma_list_by_date').execute({date})
      console.log({message: 'tomas seted', list})
      setTomasList(list)
    }
    getCacas()
  }, [date])

  const renderItem = ({item}) => {
    return <Item title={format(item.date, 'dd-MM-yyyy HH:mm')} isRigth />
  }

  const setCustomDate = date => {
    console.log({message: 'setCustomDate', date})
    setDate(date)
  }

  return (
    <View style={styles.container}>
      <View>
        <DateTimePickerComponent sendFunction={setCustomDate} />
      </View>
      <View>
        <FlatList
          data={tomasList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 32
  },
  title: {
    fontSize: 32
  },
  icon: {
    fontSize: 32
  }
})
