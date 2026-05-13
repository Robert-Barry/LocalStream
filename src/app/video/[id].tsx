import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { MOCK_VIDEOS } from "../utils/MockData";

export default function VideoDetails() {
    const { id } = useLocalSearchParams();

    // Find the video
    const video = MOCK_VIDEOS.find((video) => video.id === id);

    if (!video) {
        return (
            <View style={styles.container}>
                <Text style={styles.notFound}>Video not found</Text>
            </View>
        );
    }
    
    const player = useVideoPlayer(video.videoStreamURL, (player) => {
        player.loop = true;
        player.play();
    });
    
    return (
        <View style={styles.container}>
            <VideoView
                style={styles.video} 
                player={player}
                fullscreenOptions={{ enable: true }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    video: {
        width: '100%',
        height: '100%'
    },
    notFound: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})
