import React from 'react';
import { Button, StyleSheet, Text, View, ToastAndroid } from 'react-native';

export type Props = {
    name: string;
    baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({
    name,
    baseEnthusiasmLevel = 0,
}) => {
    const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
        baseEnthusiasmLevel,
    );

    const onIncrement = () =>
        setEnthusiasmLevel(enthusiasmLevel + 1);
    const onDecrement = () =>

        setEnthusiasmLevel(
            enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0,
        );
    const onReset = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Reset successfully! ✔',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
        setEnthusiasmLevel(0)
    }

    const getExclamationMarks = (numChars: number) =>
        numChars > 0 ? Array(numChars + 1).join('!') : '';

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                Hello {name}
                {getExclamationMarks(enthusiasmLevel)}
            </Text>
            <View style={{
                flexDirection: 'row',
                gap: 10,
                marginBottom: 10,
            }}>
                <Button
                    title="Increase enthusiasm"
                    accessibilityLabel="increment"
                    onPress={onIncrement}
                    color="blue"
                />
                <Button
                    title="Decrease enthusiasm"
                    accessibilityLabel="decrement"
                    onPress={onDecrement}
                    color="red"
                />
            </View>
            <Button
                title="Reset"
                accessibilityLabel="reset"
                onPress={onReset}
                color="green"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },
});

export default Hello;