import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { navigate } from '../Navigators/utils'
import { useDispatch } from 'react-redux'
import { setOnMain } from '../Redux/Reducers/User';


export const Main = () => {
  const dispatch = useDispatch();
  const handleGoHome = () => {
    dispatch(setOnMain(false))
    navigate('Home');
  }
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Main Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoHome}>
        <Text style={styles.title}>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9b59b6'
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
  },
})