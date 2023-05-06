import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { navigate } from '../Navigators/utils'
import { setOnMain } from '../Redux/Reducers/User';


const theme = {
  dark: {
    button: {
      backgroundColor: 'rgb(200,200,200)',
      padding: 10,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      margin: 10,
    },
    text: {
      color: 'black'
    },
  },
  light: {
    button: {
      backgroundColor: 'rgb(52, 152, 219)',
      padding: 10,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      margin: 10,
    },
    text: {
      color: 'white'
    },
  },
}

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onMain = useSelector((state:any) => state.user.onMain)
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const buttonStyle = isDarkMode ? theme.dark.button : theme.light.button;
  const textStyle = isDarkMode ? theme.dark.text : theme.light.text;

  const handleDarkTheme = () => {
    console.log('Dark theme and is on Main: ', onMain)
    setIsDarkMode(true)
  }

  const handleLightTheme = () => {
    console.log('light theme')
    setIsDarkMode(false)
  }

  const handleMain = () => {
    dispatch(setOnMain(true))
    navigate('Main')
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollView}
        style={backgroundStyle}
      >
        <Text style={[styles.welcome, {color: isDarkMode ? 'white' : 'black'}]}>
          Welcome to React Native Now
        </Text>
        <TouchableOpacity style={buttonStyle} onPress={handleDarkTheme}>
          <Text style={textStyle}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle} onPress={handleLightTheme}>
          <Text style={textStyle}>Light</Text>
        </TouchableOpacity>
          <TouchableOpacity style={buttonStyle} onPress={handleMain}>
          <Text style={textStyle}>Go To Main</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 25,
  },
})