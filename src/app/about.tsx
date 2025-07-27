import { Link } from 'expo-router'; // or the appropriate import
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Link href="/about">Go to about page</Link>
    </View>
  );
}