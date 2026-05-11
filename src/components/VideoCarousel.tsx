import { Video } from '../app/store/useAppStore';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { VideoCard } from './VideoCard';

interface VideoCarouselProps {
    title: string;
    videos: Video[];
}

export const VideoCarousel = ({title, videos}: VideoCarouselProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
        
            <FlatList
                data={videos}
                horizontal
                initialNumToRender={4}
                maxToRenderPerBatch={4}
                windowSize={5}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <VideoCard video={item} onPress={() => console.log('Video selected')} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
    titleText: {
        color: '#fff',
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 10
    }
})