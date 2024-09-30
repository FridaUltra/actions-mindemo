import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { RootStackParamList } from '../navigators/RootStacknavigator';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function IconButton({ navigation }: Props) {
  return (
    <Pressable onPress={() => navigation.navigate('Settings')}>
      <MaterialIcons name="settings" size={24} color="black" />
    </Pressable>
  );
}
