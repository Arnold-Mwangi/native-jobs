import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { imageChecker } from '../../../../utils'
import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handleNavigate }) => {
  console.log("item in job card",item)
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)} onPress={handleNavigate}>
        <Image
          source={{
            uri: imageChecker(item.strCategoryThumb) ?
              item.strCategoryThumb
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSWV-J0zJ8aj9uH0q_dINeX3ksznWH65Yhw&usqp=CAU'
          }}
          resizeMode='cover'
          style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.compnayName} numberOfLines={1}>{item.strCategory}</Text>
      <View style={styles.infoContainer}>

      </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard