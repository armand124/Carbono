import React,{useState} from "react";
import MapView from "react-native-maps";
import Bike from '../assets/img/bike.svg';
import Walk from '../assets/img/walking.svg';
import Bus from '../assets/img/bus.svg';
import { SafeAreaView,View, TextInput, Text, Pressable} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
const MainScreen = ({navigation}) => {

    Geolocation.requestAuthorization();
   
    const [bikePressed,setBikePressed] = useState(false);
    const [walkingPressed,setWalkingPressed] = useState(false);
    const [publicTransportPressed,setPublicTransportPressed] = useState(false);
    const [optionSelected,setOptionSelected] = useState(false);

    function selectBike()
    {
        setBikePressed(true);
        setWalkingPressed(false);
        setPublicTransportPressed(false);
        setOptionSelected(true);
    }
    function selectWalk()
    {
        setBikePressed(false);
        setWalkingPressed(true);
        setPublicTransportPressed(false);
        setOptionSelected(true);
    }
    function selectTransport()
    {
        setBikePressed(false);
        setWalkingPressed(false);
        setPublicTransportPressed(true);
        setOptionSelected(true);
    }

    return (
        <>
            <MapView 
            showsUserLocation={true}
            mapType='mutedStandard'
            showsMyLocationButton={true}
            rotateEnabled={false}
            loadingEnabled={true}
            className='w-max h-3/5'>
            <View className='pt-20'>
            <TextInput
                editable={optionSelected}
                autoCorrect={false}
                autoCapitalize="none"
                className="w-80 border-2 border-textColor self-center p-4 h-12 text-textColor rounded-2xl bg-bgWhite"
                placeholder={optionSelected ? "Where do you wanna go?" : "Select transport method"}
                placeholderTextColor='#929292'
            />
            </View>
            </MapView>

            <SafeAreaView className='bg-primaryGreen h-full'>
                <Text className='self-center pt-4 pb-4 text-textColor font-semibold text-lg'>Select your preffered mode of transport</Text>
                <View className='flex-row self-center space-x-5'>
                <Pressable onPress={()=>selectBike()}>
                    <View className={`bg-bgWhite w-28 h-36 items-center pt-2 rounded-md ${bikePressed ? 'border-2 border-textColor' : ''}`}>
                        <Bike width={100} height={100}/>
                        <Text className="pt-2 text-sm text-textColor font-semibold">Bicycle</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={()=>selectWalk()}>
                    <View className={`bg-bgWhite w-28 h-36 items-center pt-2 rounded-md ${walkingPressed ? 'border-2 border-textColor' : ''}`}>
                        <Walk width={100} height={100}/>
                        <Text className="pt-2 text-sm text-textColor font-semibold">Walking</Text>
                    </View>
                    </Pressable>
                    <Pressable onPress={()=>selectTransport()}>
                    <View className={`bg-bgWhite w-28 h-36 items-center pt-2 rounded-md ${publicTransportPressed ? 'border-2 border-textColor' : ''}`}>
                        <Bus width={100} height={100}/>
                        <Text className="pt-2 text-sm text-textColor font-semibold">City Transport</Text>
                    </View>
                    </Pressable>
                    
                </View>
            </SafeAreaView>
        </>
    );
};

export default MainScreen;