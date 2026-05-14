import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { Platform, View, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { SideNavigation } from '@/components/SideNavigation';
import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
                    <View style={styles.tvContainer}>
                        <View style={styles.sideNavPlaceholder}>
                            <SideNavigation />
                        </View>

                        <View style={styles.mainContent}>
                            {/* Slot renders the current page based on the route */}
                            <Stack screenOptions={{ headerShown: false }} />
                        </View>
                    </View>
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
    }
});