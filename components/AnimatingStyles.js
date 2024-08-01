import { Button, StyleSheet, View } from "react-native";
import Animated, { 
    useSharedValue, 
    withSpring,
    useAnimatedStyle,
} from "react-native-reanimated";

export default function AnimatingStyles() {
    const translateX  = useSharedValue(0);

    const handlePress = () => {
        translateX.value = withSpring(translateX.value + 50);
    }

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value * 2)}]
    }))

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Button onPress={handlePress} title="Click me" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      height: 120,
      width: 120,
      backgroundColor: '#b58df1',
      borderRadius: 20,
      marginVertical: 50,
    },
  });