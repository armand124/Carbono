import React,{useState} from "react";
import { SafeAreaView, Modal, Text, View } from "react-native";
import Clouds from '../../assets/img/clouds.svg';
import Guy from '../../assets/img/guy.svg';
import RoundButton from "../../components/Button";

const HomeScreen = ({navigation}) => {

    return (
        <Modal visible={true} transparent={true}>
            <SafeAreaView className="bg-primaryGreen h-full">
                
                {/* Clouds Images */}
                <Clouds width={250} height={90} />
                <Clouds width={560} height={90} />

                

            </SafeAreaView>
        </Modal>
    );
};

export default HomeScreen;
