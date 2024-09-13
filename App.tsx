import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'lucide-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SimpleCircle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import { User2, File, Calendar, Key, Lock, CarFront } from "lucide-react-native"
const radius = 150;
const diameter = radius * 2;
const icons = [User2, File, Calendar, Key, Lock, CarFront];
const angleStep = (2 * Math.PI) / icons.length;
const ICON_SIZE = 50

const SimpleCircle = () => {
  return (
    <View
      style={[
        {
          width: diameter,
          height: diameter,
          borderRadius: radius,
          backgroundColor: 'red'
        },
      ]}
    >
      {icons.map((IconComponent, index) => {
        const angle = angleStep * index
        const centerX = radius
        const centerY = radius
        const x = (radius * Math.cos(angle)) + centerX
        const y = (radius * Math.sin(angle)) + centerY
        const iconOffset = ICON_SIZE / 2 // to get the icon center not the top left corner of icon
        return (
          <View key={index} style={[{ position: "absolute", left: x - iconOffset, top: y - iconOffset }]}>
            <IconComponent size={ICON_SIZE} color="black" />
          </View>
        );
      })}
    </View>
  );
};
