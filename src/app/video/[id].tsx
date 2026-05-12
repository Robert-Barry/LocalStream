import { useLocalSearchParams } from "expo-router";
import { Text, StyleSheet } from "react-native";


export default function VideoDetails() {
    const { id } = useLocalSearchParams();
    
    return (
        <Text style={styles.testStyle}>{id}</Text>
    )
}

const styles = StyleSheet.create({
    testStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 30
    }
})
