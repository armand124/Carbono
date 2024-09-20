import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);

const RoundButton = ({ title, onPress, hollow }) => {
    return (
        <StyledTouchableOpacity
            className={`w-44 h-12 rounded-full justify-center items-center ${
                hollow ? 'bg-bgWhite border-2 border-primaryGreen' : 'bg-primaryGreen'
            }`}
            onPress={onPress}
        >
            <Text className="text-textColor text-lg font-semibold">{title}</Text>
        </StyledTouchableOpacity>
    );
};

export default RoundButton;
