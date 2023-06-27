import { StatusBar } from "expo-status-bar";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <Text style={styles.heading}>welcome to the Gadgetstore!</Text>
                <TouchableOpacity
                    onPress={() => console.warn("come on")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Hi</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    heading: {
        fontSize: 30,
    },
    safeArea: {
        marginHorizontal: 12,
    },
    button: {
        backgroundColor: "#000",
        width: 50,
        padding: 5,
        borderRadius: "4px",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
});
