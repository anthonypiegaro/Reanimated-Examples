import Animated, { 
    withTiming, 
    withSpring, 
    Easing,
    useSharedValue,
} from "react-native-reanimated";
import { View, Button, StyleSheet } from "react-native";

export default function CustomAnimation() {
    const translateBlueX = useSharedValue(0);
    const translateVioletX = useSharedValue(0);

    const handleBluePress = () => {
        translateBlueX.value = withTiming(translateBlueX.value + 50, {
            duration: 300,
            easing: Easing.ease,
        })
    }

    const handleVioletPress = () => {
        translateVioletX.value = withSpring(translateVioletX.value + 50, {
            mass: 1,
            damping: 10,
            stiffness: 100,
        })
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.blueSquare, {transform: [{translateX: translateBlueX}]}]}/>
            <Button onPress={handleBluePress} title="Click me" />
            <Animated.View style={[styles.violetSquare, {transform: [{ translateX: translateVioletX}]}]}/>
            <Button onPress={handleVioletPress} title="Click me" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blueSquare: {
        height: 100,
        width: 100,
        backgroundColor: "blue",
        borderRadius: 20,
    },
    violetSquare: {
        height: 100,
        width: 100,
        backgroundColor: "violet",
        borderRadius: 20,
    }
})