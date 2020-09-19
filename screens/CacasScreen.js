import * as React from 'react'
import {StyleSheet, Text, View, FlatList, StatusBar} from 'react-native'
import {format} from 'date-fns'

import DateTimePickerComponent from '../components/DateTimePickerComponent'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import domain from '../instance'

const Item = ({title}) => (
  <View style={styles.item}>
    <FontAwesomeIcon icon="poo" color="yellow" size={32} />
    <Text style={styles.title}>{title}</Text>
  </View>
)

export default function CacasScreen() {
  const [cacasList, setCacasList] = React.useState([])
  const [date, setDate] = React.useState(Date.now())
  React.useEffect(() => {
    console.log('use effect get cacas')
    async function getCacas() {
      console.log('get cacas')
      const {list} = await domain.get('get_caca_list_by_date').execute({date})
      console.log({message: 'cacas seted', list})
      setCacasList(list)
    }
    getCacas()
  }, [date])

  const renderItem = ({item}) => {
    return <Item title={format(item.date, 'dd-MM-yyyy HH:mm')} />
  }

  return (
    <View style={styles.container}>
      <View>
        <DateTimePickerComponent />
      </View>
      <View>
        <FlatList
          data={cacasList}
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
