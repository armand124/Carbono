import React from "react";
import { SafeAreaView, Modal, Text, View, TouchableOpacity } from "react-native";
import Clouds from '../assets/img/clouds.svg';
import Guy from '../assets/img/guy.svg';

const WelcomePage = ({navigation}) => {
    
    return (
        <>
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
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('Login')}>
                        <View className='w-44 h-12 rounded-full bg-primaryGreen'>
                        <Text className='font-semibold pt-3 text-sm self-center'>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                    <Text></Text> 
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('Register')}>
                        <View className='w-44 h-12 rounded-full bg-bgWhite border'>
                        <Text className='font-semibold pt-3 text-sm self-center'>REGISTER</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
            </>
    );
};

export default WelcomePage;