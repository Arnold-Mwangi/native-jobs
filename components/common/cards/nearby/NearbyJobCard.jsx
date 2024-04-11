import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'

import { imageChecker } from '../../../../utils'
import styles from './nearbyjobcard.style'
import { Stack } from 'expo-router'

const NearbyJobCard = ({ meal, handleNavigate }) => {


  const steps = meal.strInstructions.split(/\.\s+(?=[A-Z])/);


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <ImageBackground
          source={{
            uri: imageChecker(meal.strMealThumb)
              ? meal.strMealThumb
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSWV-J0zJ8aj9uH0q_dINeX3ksznWH65Yhw&usqp=CAU'
          }}
          resizeMode='cover'
          style={styles.backgroundImage}>
          <View style={styles.overlay}></View>
          <View style={styles.textContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerContainerChild1}>{meal.strMeal}</Text>
              <Text style={styles.headerContainerChild2}>{meal.strArea}</Text>
            </View>
            <View style={styles.instructionsContainer}>
              <Text style={styles.heading2}>Instructions</Text>
              
                {steps?.map((step, index) => (
                  <View style={[styles.instructions, {flexDirection: 'row'}]} key={`number-${index}`}>
                    <View style = {[{paddingVertical: 10}]}>
                      <Text style={[styles.insNumbers]} >{index + 1}</Text>
                    </View>

                    <View style={[styles.steps, {flex:1}]}>
                      <Text style = {styles.steps} >{step}</Text>
                    </View>


                  </View>

                ))}
              
            </View>


          </View>

        </ImageBackground>
      </View>
    </View>

  )
}

export default NearbyJobCard