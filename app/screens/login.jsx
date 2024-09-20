import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import RoundButton from "../../components/Button";
import { Modal } from "react-native";
const LoginPage = ({navigation}) => {
    return (
        <Modal visible={true} transparent={true}>
        <SafeAreaView>
            <Text>dasda</Text>
            <Text>dasda</Text>
            <Text>dasda</Text>
            <Text>dasda</Text>
            <Text>dasda</Text>
            <RoundButton title="LOGIN" hollow={false}
                     onPress={() =>navigation.navigate('Welcome')}/>
        </SafeAreaView>
        </Modal>
    );
}
export default LoginPage;
