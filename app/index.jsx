import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

const SignIn = ({ navigation }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const testUser = { email: "psabhirami015@gmail.com", password: "abhi@123" };

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Login pressed");
    if (!email || !password) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    if (email !== testUser.email || password !== testUser.password) {
      console.log(password !== testUser.password);
      Alert.alert("Error", "Email or Password is incorrect");
      return;
    }
    router.push("/home");
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log("Forgot password pressed");
    router.push({
      pathname: "/forgot-password",
    });
  };

  const handleSignUp = () => {
    // Implement your sign up navigation logic here

    console.log("Sign up pressed");
    router.push({
      pathname: "/sign-up",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/appIcon.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={handleForgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4c669f",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 15,
    borderRadius: 25,
    fontSize: 16,
    color: "#fff",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  loginButtonText: {
    color: "#4c669f",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordContainer: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: "#fff",
    fontSize: 14,
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signUpText: {
    color: "#fff",
    fontSize: 14,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
