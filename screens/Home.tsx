import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function Home({ navigation }: RootTabScreenProps<'home'>) {
    const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Content</Text>
      <Pressable
              onPress={() => navigation.navigate('StackScreens')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Text style={styles.title}>Open Category</Text>
              
            </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
