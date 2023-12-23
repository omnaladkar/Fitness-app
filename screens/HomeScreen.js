import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FitnessCards from "../components/FitnessCards";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  
  const { calories, minutes, workout } = useContext(FitnessItems);
  const [showDarkTheme, setShowDarkTheme] = useState(false);

  const toggleTheme = () => {
    setShowDarkTheme(!showDarkTheme);
  };


  return (
    <View style={showDarkTheme ? styles.containerDark : styles.container}>
    <ScrollView showsVerticalScrollIndicator={true} style={{ marginTop: 20 }} bounces={true}>
      <View
        style={{
          backgroundColor: "#000000d7",
          paddingTop: 40,
          paddingHorizontal: 20,
          height: 160,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 50,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
           Healthy Being in 30 days
          </Text>

          <TouchableOpacity onPress={toggleTheme}>
              {showDarkTheme ? (
                <Ionicons name="sunny" size={24} color="white" />
              ) : (
                <Ionicons name="moon" size={24} color="black" />
              )}
            </TouchableOpacity>

        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {calories.toFixed(2)}
            </Text>
            <Text>KCAL</Text>
          </View>

          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{workout}</Text>
            <Text>WORKOUTS</Text>
          </View>

          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{minutes}</Text>
            <Text>MINUTES</Text>
          </View>
        </View>
      </View>

      <FitnessCards />
    </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    backgroundColor: "#000000",
  },
  shadowCards: {
    backgroundColor: "#ffffff",
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
