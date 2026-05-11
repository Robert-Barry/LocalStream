import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type NavItem = {
    id: string,
    label: string,
    icon: string
};

 const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'live', label: 'Live TV', icon: '📺' },
    { id: 'news', label: 'Local News', icon: '📰' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
 ];

 export const SideNavigation = () => {
    return (
        <View style={styles.container}>
            {NAV_ITEMS.map((item, index) => (
                <Pressable key={item.id}
                // Give focus to the first item
                hasTVPreferredFocus={index === 0}
                style={({ focused }) => [
                    styles.navItem,
                    focused && styles.navItemFocused
                ]}
                onPress={() => {
                    // Placeholder for Expo Router navigation
                    console.log(`User pressed select on: ${item.label}`);
                }}
                >
                    {({ focused }) => (
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>{item.icon}</Text>
                        </View>
                    )   
                    }
                </Pressable>
            ))}
        </View>
    );
 };

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        alignItems: 'center',
        gap: 20
    },
    navItem: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent'
    },
    navItemFocused: {
        backgroundColor: '#fff',
        borderColor: '#0055ff',
        transform: [{ scale: 1.1 }]
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 24
    }
 })