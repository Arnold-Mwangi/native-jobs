import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './company.style'
import { icons } from '../../../constants'
import { imageChecker } from '../../../utils'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Company = ({ companyLogo, strArea, strMeal, strCategory, handleNavigate }) => {
  const mealThumb = companyLogo
  const mealName = strMeal
  const location = strArea
  const category = strCategory

  const route = useRouter()

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <View style={styles.container} >
        <View style={styles.logoBox}>
          <Image
            source={{
              uri: imageChecker(mealThumb) ?
                mealThumb : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSWV-J0zJ8aj9uH0q_dINeX3ksznWH65Yhw&usqp=CAU'
            }}
            style={styles.logoImage}
            onPress={handleNavigate} />
        </View>
        <View style={styles.jobTitleBox}>
          <Text style={styles.jobTitle}>{mealName}</Text>
        </View>
        <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{category} /</Text>
          <View style={styles.locationBox}>
            <Image source={icons.location}
              resizeMode="contain"
              style={styles.locationImage}
            />
          </View>
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default Company