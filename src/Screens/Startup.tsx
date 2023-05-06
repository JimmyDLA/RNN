import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { navigateAndSimpleReset } from '../Navigators/utils'

export const Startup = () => {
  
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
    navigateAndSimpleReset('Home');
  };
  
  useEffect(()=> {
    init()
  });

  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>
        React Native Now
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c'
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: '900',
    
  }
})