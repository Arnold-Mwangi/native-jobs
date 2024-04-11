import React, {useState} from 'react';
import { View, Text, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { COLORS, SIZES, icons } from '../../constants';
import { ScreenHeaderBtn, Specifics } from '../../components';

const MealDetails = () => {
    const params = useLocalSearchParams()
    const router = useRouter()
    const meal = params.meal
    console.log("meal_details", meal)

    const[mealDetails, setMealDetails] = useState(null); 
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
                            handlePress={() => this._handleGoBack()} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%" />
                    ),
                    headerTitle: `${meal.strMeal} Recipe`,
                }}
            />
        </SafeAreaView>
    )
}


export default MealDetails