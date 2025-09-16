import { Stack } from "expo-router";

export default function RootLayout(){
    return <Stack
        initialRouteName="index"
        screenOptions={{
            headerShown: false // this ensures tha navbar doesn't show
        }}
    >
        <Stack.Screen name="index" options={{title: "Home page"}}/>
    </Stack>
}