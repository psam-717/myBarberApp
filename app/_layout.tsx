import { Stack } from "expo-router";

export default function RootLayout(){
    return <Stack
        initialRouteName="index"
        screenOptions={{
            headerShown: false // this ensures tha navbar doesn't show
        }}
        
    >
        <Stack.Screen name="index" />
        <Stack.Screen name="auth" options={{title: "Sign in page"}}/>
        
    </Stack>
}