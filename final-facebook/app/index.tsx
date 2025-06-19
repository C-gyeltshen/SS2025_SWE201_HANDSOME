import "react-native-url-polyfill/auto";
import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Session } from "@supabase/supabase-js";
import { supabase } from "./lib/supabase";
import SplashScreenComponent from "./(tabs)/SplashScreen";
import FacebookFeed from "./feeds/home-feeds";

export default function App() {

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {session && session.user ? (
        <FacebookFeed />
      ) : (
        <SplashScreenComponent />
      )}
    </SafeAreaView>
  );
}
