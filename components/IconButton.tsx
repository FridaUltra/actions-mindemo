import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable } from 'react-native';

export default function IconButton({ navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate('Settings')}>
      <MaterialIcons name="settings" size={24} color="black" />
    </Pressable>
  );
}
