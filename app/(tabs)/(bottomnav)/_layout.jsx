import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='home' options={{title:"home"}}/>
        <Tabs.Screen name='post_upload' options={{title:"post_upload"}}/>
        
    </Tabs>
  );
}