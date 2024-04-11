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
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => { }
  
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%" />
                    ),
                    headerTitle: `${strCategory} meals`,
                }}

            />

            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                >
                    {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : !data.meals ? (
                        <Text>No {strCategory} found</Text>
                    ):(
                        data.meals?.map((meal, index) => (
                            <View style={{ padding: SIZES.medium, paddingBottom: 100 }} key={index + 1}>
                                <Company
                                    companyLogo={meal.strMealThumb}
                                    strArea={meal.strArea}
                                    strMeal={meal.strMeal}
                                    strCategory={meal.strCategory}
                                    
                                    

                                />
                                <JobTabs
                                    data={meal} />
                            </View>

                        ))

                    )}

                </ScrollView>
            </>
        </SafeAreaView>
    )

}

export default CategoryDetails