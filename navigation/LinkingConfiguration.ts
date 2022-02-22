/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          home: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          profile: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          
        },
      },
      StackScreens: {
        screens: {
          category: {
            screens: {
              stack: 'category',
            },
          },
        }
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
