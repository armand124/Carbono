import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,View,TextInput,TouchableOpacity } from "react-native";
import RoundButton from "../../components/Button";
import { Modal } from "react-native";

const LoginPage = ({navigation}) => {
    
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Modal visible={true} transparent={true}>
        <SafeAreaView className='bg-primaryGreen h-full'>
            <Text className='pb-44'></Text>
        <View  style={{
                    width: '90%',
                    height: 455,
                    backgroundColor: '#f6f6f6',
                    borderRadius: 20,
                    
                    alignSelf:'center',
                }}>
                    <Text className="pt-10 self-center text-3xl font-bold text-textColor">
                        Login
                    </Text>
                    <Text className="pl-9 pt-12 text-textColor pb-1">E-mail</Text>
                    <TextInput
                    className="w-72 self-center p-4 h-12 text-textColor rounded-2xl bg-gray"
                    placeholder="yourname@example.com"
                    placeholderTextColor='#929292'
                     />
                     <Text className="pl-9 pt-5 text-textColor pb-1">Password</Text>
                    <TextInput
                    className="w-72 self-center p-4 h-12 text-textColor rounded-2xl bg-gray"
                    placeholder="*************"
                    placeholderTextColor='#929292'
                    secureTextEntry={showPassword}
                     />
                     <View className='pl-7 pt-3 flex-row'>
                    <TouchableOpacity 
                    onPress = {() => setShowPassword(!showPassword)}
                    className={`ml-2 rounded w-4 h-4 ${ showPassword ?  'bg-gray' : 'bg-textColor'}`}> 
                        <Text></Text>
                    </TouchableOpacity>
                    <Text className='pl-1'>Show Password</Text>
                    </View>

                    {/* Buttons */}
                    <View className='self-center pt-10'>
                    <RoundButton title="LOGIN" hollow={false}
                     onPress={() => console.log('pep')}/>
                     </View>
                    <View className='self-center pt-9 flex-row'>
                       <Text> Don't have an account?{' '}</Text>
                       <TouchableOpacity
                       onPress={()=>navigation.navigate('Register')}>
                        <Text className='text-darkGreen'>Register now!</Text>
                       </TouchableOpacity>
                    </View>
                </View>
        </SafeAreaView>
        </Modal>
    );
}
export default LoginPage;
