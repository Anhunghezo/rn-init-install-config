/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Hello from 'Component/Hello';
import TestCpn from 'Component/TestCpn';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [counter, setCounter] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPressCounterButton = (amount: number) => {
    setCounter(pre => pre + amount)
  }

  return (
    <View style={styles.container}>
      <Text style={StyleSheet.flatten([styles.text, styles.heading])}>Hello world from react-native!</Text>
      <TestCpn />
      <Hello name='Huynh' />

      <View>
        <View>
          <Text style={styles.text}>{counter}</Text>
        </View>
        <View style={styles.wrapButton}>
          <View style={styles.button}>
            <Button title='-' color={"red"} onPress={() => {
              onPressCounterButton(-1)
            }} />
          </View>
          <View style={styles.button}>
            <Button title='+' color={"blue"} onPress={() => {
              onPressCounterButton(1)
            }} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  container: {
    flex: 1,
    backgroundColor: "#ff7815",
  },
  heading: {
    marginBottom: "40%",
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: "800",
    textAlign: 'center',
  },
  wrapButton: {
    gap: 20,
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around'
  },
  button: {
    width: '40%',
    fontSize: 30,
  }
});

export default App;
