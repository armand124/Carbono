import React from "react";
import { Modal,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterPage = ({navigation}) => {
    return (
        <Modal visible={true} transparent={true}>
            <SafeAreaView>
                <Text>Register page</Text>
            </SafeAreaView>
        </Modal>
    );
}
export default RegisterPage;