import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php')

  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = item => {
    // setSelectedJob(item);
    router.push(`/category_details/${item.strCategory}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Categories</Text>
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
          <FlatList
            data={data.categories}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}

                handleNavigate={() =>  handleCardPress(item)}
              />
            )}
            keyExtractor={item => item?.idCategory}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}

      </View>
    </View>
  )
}

export default Popularjobs