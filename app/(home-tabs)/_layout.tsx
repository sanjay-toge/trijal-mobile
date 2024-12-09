import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="feed" />
            <Tabs.Screen name="courses" />
            <Tabs.Screen name="profile" />
        </Tabs>
    );
}
