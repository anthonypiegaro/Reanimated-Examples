import { View, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    withDecay
} from "react-native-reanimated";

const SIZE = 120;
const BOUNDARY_OFFSET = 50;

export default function HandlingGestures() {
    const pressed = useSharedValue(false);
    const width = useSharedValue(0);

    const onLayout = (event: LayoutChangeEvent) => {
        width.value = event.nativeEvent.layout.width;
    };

    const offset = useSharedValue(0);

    const pan = Gesture.Pan()
        .onBegin(() => {
            pressed.value = true;
        })
        .onChange((event) => {
            offset.value += event.changeX;
        })
        .onFinalize((event) => {
            offset.value = withDecay({
              velocity: event.velocityX,
              rubberBandEffect: true,
              clamp: [
                -(width.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
                width.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
              ],
            });
        });
      
    
    const animatedStyles = useAnimatedStyle(() => ({
        backgroundColor: pressed.value ? "#FFE04B" : "#B58DF1",
        transform: [
            { translateX: offset.value},
            { scale: withTiming(pressed.value ? 1.2 : 1)}
        ]
    }));

    return (
        <View style={styles.container} onLayout={onLayout}>
            <GestureDetector gesture={pan}>
                <Animated.View style={[styles.circle, animatedStyles]} />
            </GestureDetector>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    circle: {
      height: SIZE,
      width: SIZE,
      borderRadius: 500,
    },
  });