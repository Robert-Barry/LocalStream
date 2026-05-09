import React, { useRef, useEffect } from 'react';
import { View, Text, Image , StyleSheet, Pressable, Animated } from 'react-native';
import { Video } from '../app/store/useAppStore';

interface VideoCardProps {
    video: Video;
    onPress: (video: Video) => void;
}

export const VideoCard = ({ video, onPress }: VideoCardProps) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;


    return (
        <Pressable onPress={() => onPress(video)} >
            {({ focused }) => {
                Animated.spring(scaleAnim, {
                    toValue: focused ? 1.05 : 1,
                    friction: 5,
                    useNativeDriver: true,
                }).start();

                return (

                    <Animated.View
                        style={[
                            styles.cardContainer,
                            focused && styles.cardFocused,
                            { transform: [{ scale: scaleAnim }] }
                        
                        ]}
                    >
                        <Image style={styles.thumbnail} source={{ uri: video.thumbnailURL }} />
                        <Text
                            style={[
                                styles.titleText,
                                focused && styles.titleTextFocused
                            ]}
                        >
                            {video.title}
                        </Text>
                    </Animated.View>
            );
            }}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 320,
        height: 180,
        borderRadius: 12,
        marginHorizontal: 10,
        backgroundColor: '#333',
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: 'transparent',
    },
    cardFocused: {
        borderColor: '#ffffff',
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    thumbnail: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    titleText: {
        color: '#888',
        fontSize: 18,
        marginTop: 8,
        fontWeight: '500'
    },
    titleTextFocused: {
        color: '#ffffff',
        fontWeight: 'bold'
    }

})
    