import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

const RoundButton = ({ title, onPress, hollow }) => {
    return (
       
            <View className='bg-primaryGreen w-40'>
            <Text className="text-textColor text-lg font-semibold">{title}</Text>
            </View>
        
    );
};

export default RoundButton;