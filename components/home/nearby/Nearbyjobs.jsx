import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, Touchable } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/random.php')


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Featured Meal</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : error ? (

          <Text>Something went wrong</Text>
        ) : (
          data.meals?.map((meal) => (
            <NearbyJobCard
            meal={meal}
            key={`meal-${meal?.idCategory}`}
           

            />
          ))
        )}

      </View>
    </View>
  )
}

export default Nearbyjobs