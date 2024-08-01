import { useState } from "react";
import { Button, View, SafeAreaView, ScrollView } from "react-native";

import QuickStart from "./components/QuickStart";
import AnimatingStyles from "./components/AnimatingStyles";
import AnimatedComponent from "./components/AnimatedComponents";
import CustomAnimation from "./components/CustomAnimations";
import ApplyingModifiers from "./components/ApplyingModifiers";

export default function App() {
  const [topic, setTopic] = useState("quickstart");

  return (
    <SafeAreaView>
      <ScrollView style={{height: "100%"}}>
        <View style={{flexDirection: "row", flexWrap: "wrap"}}>
          <Button title="Quick Start" onPress={() => setTopic("quickstart")} />
          <Button title="Animating Styles" onPress={() => setTopic("animatingstyles")} />
          <Button title="Animating Components" onPress={() => setTopic("animatingcomponents")} />
          <Button title="Custom Animations" onPress={() => setTopic("customanimations")} />
          <Button title="Applying Modifiers" onPress={() => setTopic("applyingmodifiers")} />
        </View>
        {topic == "quickstart" && <QuickStart />}
        {topic == "animatingstyles" && <AnimatingStyles />}
        {topic == "animatingcomponents" && <AnimatedComponent />}
        {topic == "customanimations" && <CustomAnimation />}
        {topic == "applyingmodifiers" && <ApplyingModifiers />}
      </ScrollView>
    </SafeAreaView>
  )
}