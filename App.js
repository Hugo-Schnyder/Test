import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Button } from 'react-native-elements';


export default function HomeCard() {
  return(

  
  <View style={styles.container}>
      <Swiper
          cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={(card) => {
              return (
                  <View style={styles.card}>
                      <Text style={styles.text}>{card}</Text>
                  </View>
              )
          }}
          onSwiped={(cardIndex) => {console.log(cardIndex)}}
          onSwipedAll={() => {console.log('onSwipedAll')}}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize= {3}>
          <Button
              onPress={() => {console.log('oulala')}}
              title="Press me">
              You can press me
          </Button>
      </Swiper>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F5FCFF",
    
  },
  card: {
    flex: 1,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: "#758BFD",
    justifyContent: "center",
    backgroundColor: "white",
    position: 'absolute',
    width: '100%',
    height: '50%',
    
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});