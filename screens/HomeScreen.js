import React, {useState} from 'react'
import {Image, Platform, StyleSheet, Text, View, Alert} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {Button, Divider} from 'react-native-elements'
import Modal from 'react-native-modal'
import {MonoText} from '../components/StyledText'
import domain from '../instance'

export default function HomeScreen() {
  const [visible, setVisible] = useState(false)
  const [sendFunction, setSendFunction] = useState(() => {})

  const toggleOverlay = () => {
    console.log({message: 'toggleOverlay', visible})
    setVisible(!visible)
  }
  const sendCaca = date => {
    console.log({message: 'sendCaca', date})
    toggleOverlay()
  }

  const onAddCaca = async () => {
    toggleOverlay()
    // setSendFunction(sendCaca)
    console.log({message: 'onAddCaca', date: Date.now()})
    const caca = await domain
      .get('add_caca_use_case')
      .execute({date: Date.now()})
    Alert.alert('Aviso de caca', 'Caca añadida')
  }

  const onAddToma = async () => {
    toggleOverlay()
    // setSendFunction(sendCaca)
    console.log({message: 'onAddCaca', date: Date.now()})
    const caca = await domain
      .get('add_caca_use_case')
      .execute({date: Date.now()})
    Alert.alert('Aviso de caca', 'Caca añadida')
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Text style={styles.tabBarInfoText}>
            Ten cuidado de tu bebe y gestiona todos los eventos importantes
          </Text>
          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>
              Tomas, cacas, pipis...
            </MonoText>
          </View>
        </View>

        <View style={styles.getStartedContainer}>
          <View>
            <Button title="Añadir Toma" />
          </View>
          <Divider style={{height: 40, backgroundColor: 'transparent'}} />
          <View>
            <Button title="Añadir Caca" onPress={onAddCaca} />
          </View>
          <Divider style={{height: 40, backgroundColor: 'transparent'}} />
          <View>
            <Button title="Añadir Pipi" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})
