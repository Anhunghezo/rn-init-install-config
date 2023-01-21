import { Text, View } from 'react-native';

interface ITestCpnProps {
}

function TestCpn(): JSX.Element {
    return <View>
        <Text style={{
            textAlign: 'center',
            color: 'white'
        }}>HELLO FROM TESTCPN😁</Text>
    </View>;
};

export default TestCpn;
