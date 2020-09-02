import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TomasScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <OptionButton
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        isLastOption
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (   
    <Button onPress={onPress}
      title={label}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  contentContainer: {
    paddingTop: 15,
    justifyContent: 'space-between'
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
