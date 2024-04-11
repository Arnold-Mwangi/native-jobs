import React, { useCallback, useState } from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { COLORS, SIZES, icons } from '../../constants'
import useFetch from '../../hook/useFetch';

const CategoryDetails = () => {

    const params = useLocalSearchParams();
    const router = useRouter();
    const strCategory = params.id

    const { data, isLoading, error, refetch } = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strCategory}`)
   console.log(data)
    
    return (
        <Text>category details</Text>
    ) 
}
 
export default CategoryDetails