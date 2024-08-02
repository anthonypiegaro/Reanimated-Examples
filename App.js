import { useState } from "react";
import { Button, View, SafeAreaView, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import QuickStart from "./components/QuickStart";
import AnimatingStyles from "./components/AnimatingStyles";
import AnimatedComponent from "./components/AnimatedComponents";
import CustomAnimation from "./components/CustomAnimations";
import ApplyingModifiers from "./components/ApplyingModifiers";
import HandlingGestures from "./components/HandlingGestures";

export default function App() {
  const [topic, setTopic] = useState("quickstart");

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView>
        <ScrollView style={{height: "100%"}}>
          <View style={{flexDirection: "row", flexWrap: "wrap"}}>
            <Button title="Quick Start" onPress={() => setTopic("quickstart")} />
            <Button title="Animating Styles" onPress={() => setTopic("animatingstyles")} />
            <Button title="Animating Components" onPress={() => setTopic("animatingcomponents")} />
            <Button title="Custom Animations" onPress={() => setTopic("customanimations")} />
            <Button title="Applying Modifiers" onPress={() => setTopic("applyingmodifiers")} />
            <Button title="Handling Gestures" onPress={() => setTopic("handlinggestures")} />
          </View>
          {topic == "quickstart" && <QuickStart />}
          {topic == "animatingstyles" && <AnimatingStyles />}
          {topic == "animatingcomponents" && <AnimatedComponent />}
          {topic == "customanimations" && <CustomAnimation />}
          {topic == "applyingmodifiers" && <ApplyingModifiers />}
          {topic == "handlinggestures" && <HandlingGestures />}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}