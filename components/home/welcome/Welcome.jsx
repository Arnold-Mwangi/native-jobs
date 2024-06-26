// components/home/welcome/Welcome.jsx 

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, icons, images, SIZES } from '../../../constants'
import styles from './welcome.style'

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>

      <View style={styles.container}>
        <Text style={styles.userName}>Hello Arnold</Text>
        <Text style={styles.welcomeMessage}>Find your best recipe</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => { }}
            placeholder='What are you cooking today? '
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode="contain"
            styles={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>

        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (

            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>
                {item}
              </Text>

            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />

      </View>

    </View>
  )
}

export default Welcome