import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { 
    Platform, 
    View, 
    Text,
    Pressable, 
    StyleSheet, 
    useColorScheme 
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { SideNavigation } from '@/components/SideNavigation';
import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundaryProps } from 'expo-router';

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
    // TODO: Build a TV-friendly Error UI here.
    // 1. It needs a dark background.
    // 2. It needs large, readable text displaying the error.message.
    // 3. It needs a pressable button to trigger the 'retry()' function/

    return (
        <View style={styles.errorContainer}>
            <Text style={styles.textWrong}>Something went wrong.</Text>
            <Text style={styles.textError}>{error.message}</Text>
            <Pressable style={styles.buttonRetry} onPress={retry}>
                <Text style={styles.textTryAgain}>Try Again</Text>
            </Pressable>
        </View>
    )
}

const queryClientOptions = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5 // Data is fresh for 5 minutes before refreshing
        }
    }
}

export default function RootLayout() {
    const [queryClient] = useState(() => new QueryClient(queryClientOptions));
    const colorScheme = useColorScheme();

    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                {/* SafeAreaProvider communicates with TV's layout engine */}
                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                    { Platform.OS === 'ios' || !Platform.isTV ? <AnimatedSplashOverlay /> : null }

                    {/* Main TV Layout Structure */}
                    <SafeAreaView style={styles.tvContainer}>
                        <View style={styles.sideNavPlaceholder}>
                            <SideNavigation />
                        </View>

                        <View style={styles.mainContent}>
                            <Stack screenOptions={{ headerShown: false }} />
                        </View>
                    </SafeAreaView>
                </ThemeProvider>
            </SafeAreaProvider>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    tvContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000'
    },
    sideNavPlaceholder: {
        width: 80,
        backgroundColor: '#111',
        borderRightWidth: 1,
        borderRightColor: '#333'
    },
    mainContent: {
        flex: 1
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    textWrong: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textError: {
        color: '#fff',
        fontSize: 32,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 20
    },
    textTryAgain: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonRetry: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: 'red',
        borderRadius: 8,
        width: 300,
        alignContent: 'center'
    }
});