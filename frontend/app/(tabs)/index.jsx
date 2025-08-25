import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => console.log("Login pressed", { email, password });
  const handleForgotPassword = () => console.log("Forgot password pressed");
  const handleSignUp = () => console.log("Sign up pressed");
  const handleGoogleLogin = () => console.log("Google login pressed");

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Background Gradient */}
      <LinearGradient
        colors={["#1e7e34", "#28a745", "#20c997"]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, height }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Field Pattern Overlay */}
      <View className="absolute inset-0 opacity-10">
        {/* Lines */}
        <View
          style={{
            position: "absolute",
            top: height * 0.2,
            left: width * 0.1,
            right: width * 0.1,
            height: 2,
            backgroundColor: "#fff",
          }}
        />
        <View
          style={{
            position: "absolute",
            top: height * 0.5,
            left: width * 0.1,
            right: width * 0.1,
            height: 2,
            backgroundColor: "#fff",
          }}
        />
        <View
          style={{
            position: "absolute",
            top: height * 0.8,
            left: width * 0.1,
            right: width * 0.1,
            height: 2,
            backgroundColor: "#fff",
          }}
        />
        {/* Center Circle */}
        <View
          style={{
            position: "absolute",
            top: height * 0.45,
            left: width * 0.4,
            width: width * 0.2,
            height: width * 0.2,
            borderRadius: width * 0.1,
            borderWidth: 2,
            borderColor: "#fff",
          }}
        />
      </View>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View className="flex-1 justify-center px-6">
          {/* Header */}
          <View className="items-center mb-8">
            <View className="w-16 h-16 bg-[rgba(255,255,255,0.2)] rounded-xl items-center justify-center mb-3 border border-[rgba(255,255,255,0.3)]">
              <Ionicons name="football" size={30} color="white" />
            </View>
            <Text className="text-2xl font-bold text-white mb-1 text-center">
              TurfTime
            </Text>
            <Text className="text-base text-white/90 font-semibold text-center mb-1">
              Your Premier Sports Turf Booking
            </Text>
            <Text className="text-xs text-white/80 text-center">
              Book • Play • Win
            </Text>
          </View>

          {/* Login Card */}
          <View className="bg-[rgba(255,255,255,0.15)] rounded-2xl p-6 border border-[rgba(255,255,255,0.2)] mb-4">
            {/* Welcome Text */}
            <View className="items-center mb-5">
              <Text className="text-lg font-bold text-white mb-1">
                Welcome Back
              </Text>
              <Text className="text-xs text-white/80">
                Sign in to book your favorite turf
              </Text>
            </View>

            {/* Email Input */}
            <View className="mb-4 relative">
              <View className="absolute left-3 top-3 z-10">
                <Ionicons name="mail-outline" size={18} color="#9CA3AF" />
              </View>
              <TextInput
                className="bg-white/90 rounded-lg pl-10 pr-3 py-3 text-sm text-gray-900 border border-[rgba(255,255,255,0.3)]"
                placeholder="Enter your email"
                placeholderTextColor="#6B7280"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password Input */}
            <View className="mb-3 relative">
              <View className="absolute left-3 top-3 z-10">
                <Ionicons name="lock-closed-outline" size={18} color="#9CA3AF" />
              </View>
              <TextInput
                className="bg-white/90 rounded-lg pl-10 pr-10 py-3 text-sm text-gray-900 border border-[rgba(255,255,255,0.3)]"
                placeholder="Enter your password"
                placeholderTextColor="#6B7280"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                className="absolute right-3 top-3"
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                  size={18}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <View className="items-end mb-5">
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text className="text-xs text-white/90 underline">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              className="bg-[#28a745] rounded-lg py-3 items-center mb-4 shadow-lg"
              onPress={handleLogin}
              activeOpacity={0.9}
            >
              <Text className="text-white text-base font-bold">
                Sign In to Book Turf
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="flex-row items-center mb-4">
              <View className="flex-1 h-px bg-white/30" />
              <Text className="mx-3 text-xs text-white/80">or</Text>
              <View className="flex-1 h-px bg-white/30" />
            </View>

            {/* Google Login */}
            <TouchableOpacity
              className="bg-[rgba(255,255,255,0.15)] rounded-lg py-2 items-center border border-[rgba(255,255,255,0.3)] mb-4"
              onPress={handleGoogleLogin}
              activeOpacity={0.8}
            >
              <View className="flex-row items-center">
                <Ionicons name="logo-google" size={16} color="white" />
                <Text className="text-white text-sm font-semibold ml-2">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View className="items-center">
              <Text className="text-xs text-white/80">
                Don&apos;t have an account?{" "}
                <Text
                  className="text-white font-semibold underline"
                  onPress={handleSignUp}
                >
                  Create Account
                </Text>
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View className="items-center">
            <Text className="text-[10px] text-white/70 text-center">
              © 2024 TurfTime. Book your game, play your best.
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
