// /components/SignupScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();

  // State variables for input fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle signup
  const handleSignup = () => {
    // Simple validation
    if (!username || !password) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    // Simulating signup logic (e.g., sending data to a server)
    // Here, you would typically make an API call
    console.log("Signup successful for:", username);

    // Optionally, navigate to another screen after signup
    Alert.alert("Success", "Signup successful!");
    router.push("/"); // Redirect to home or another screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    marginBottom: 15,
  },
});
