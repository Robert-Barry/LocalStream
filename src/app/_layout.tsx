import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { Platform, View, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { Slot } from 'expo-router';

import { AnimatedSplashOverlay } from '@/components/animated-icon';


export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            {/* SafeAreaProvider communicates with TV's layout engine */}
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                { Platform.OS === 'ios' || !Platform.isTV ? <AnimatedSplashOverlay /> : null }

                {/* Main TV Layout Structure */}
                <View style={styles.tvContainer}>
                    <View style={styles.sideNavPlaceholder}>
                        {/* <SideNavigation /> */}
                    </View>

                    <View style={styles.mainContent}>
                        {/* Slot renders the current page based on the route */}
                        <Slot />
                    </View>
                </View>
            </ThemeProvider>
        </SafeAreaProvider>
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