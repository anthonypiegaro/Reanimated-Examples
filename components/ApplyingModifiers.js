import { View, Button, StyleSheet } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence
} from "react-native-reanimated";

export default function ApplyingModifiers() {
    const offset = useSharedValue(0);
    const offsetOne = useSharedValue(0);
    const offsetTwo = useSharedValue(0);

    const style = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }]
    }));
    const styleOne = useAnimatedStyle(() => ({
        transform: [{ translateX: offsetOne.value }]
    }));
    const styleTwo = useAnimatedStyle(() => ({
        transform: [{ translateX: offsetTwo.value }]
    }));

    const OFFSET = 40;
    const TIME = 250;

    const handlePress = () => {
        offset.value = withTiming(OFFSET);
    };

    const handlePressOne = () => {
        offsetOne.value = withRepeat(withTiming(OFFSET), 5, true);
    };

    const handlePressTwo = () => {
        offsetTwo.value = withSequence(
            withTiming(-OFFSET, { duration: TIME / 2 }),
            withRepeat(withTiming(OFFSET, {duration: TIME }), 5, true),
            withTiming(0, { duration: TIME / 2})
        );
    };

    return (
        <>
            <View style={styles.container}>
                <Animated.View style={[styles.box, style]}/>
                <Button title="shake" onPress={handlePress} />
            </View>
            <View style={styles.container}>
                <Animated.View style={[styles.box, styleOne]}/>
                <Button title="shake" onPress={handlePressOne} />
            </View>
            <View style={styles.container}>
                <Animated.View style={[styles.box, styleTwo]}/>
                <Button title="shake" onPress={handlePressTwo} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    box: {
      width: 100,
      height: 100,
      margin: 50,
      borderRadius: 15,
      backgroundColor: '#b58df1',
    },
  });