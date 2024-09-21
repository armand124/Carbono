import React from "react";
import { SafeAreaView, Modal, Text, View } from "react-native";
import Clouds from '../../assets/img/clouds.svg';
import Guy from '../../assets/img/guy.svg';
import RoundButton from "../../components/Button";
import { useNavigation } from "expo-router";

const Welcome_Page = () => {

    const navigation = useNavigation();
    
    return (
        <Modal visible={true} transparent={true}>
            <SafeAreaView className="bg-primaryGreen h-full">
                
                {/* Clouds Images */}
                <Clouds width={250} height={90} />
                <Clouds width={560} height={90} />

                {/* Guy Illustration */}
                <Guy width={400} height={270} />

                {/* Welcome Text and Buttons */}
                <View style={{
                    width: '100%',
                    height: 700,
                    backgroundColor: '#f6f6f6',
                    borderRadius: 20,
                    alignItems: 'center',
                }}>
                    <Text className="pt-8 text-3xl font-bold text-textColor">
                        Welcome to Carbono!
                    </Text>
                    <Text className="text-base pt-1 pb-10 text-textColor">
                        Your path to a <Text className='font-bold' style={{ color: 'green' }}>greener</Text> future
                    </Text>
                    
                    {/* Buttons */}
                    <RoundButton title="LOGIN" hollow={false}
                     onPress={() => navigation.navigate('Login')}/>
                    <Text></Text> 
                    <RoundButton title="REGISTER" hollow={true}
                    onPress={() => navigation.navigate('Register')} />
                </View>

            </SafeAreaView>
        </Modal>
    );
};

export default Welcome_Page;
