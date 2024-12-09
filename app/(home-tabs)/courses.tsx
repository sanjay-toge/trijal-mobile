import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const courses = () => {
    return (
        <ScrollView>
            <SafeAreaView style={{ height: 1000 }}>
                <View >
                    <Text>courses</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default courses