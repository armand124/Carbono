import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,View,TextInput,TouchableOpacity, KeyboardAvoidingView } from "react-native";
import RoundButton from '../components/Button';
import { Modal } from "react-native";
import { TouchableWithoutFeedback,Keyboard } from "react-native";
import { Firebase_Auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [alert,setAlert] = useState('');
    const auth = Firebase_Auth;
    const getRegistrationMessage = async () => {
        if(!(password === confirmPassword)){
           return "Passwords do not match!";
        }
        else{
        try{
            const response = await createUserWithEmailAndPassword(auth,email,password);
            return "OK";
        }catch(error){
            if(error.code=="auth/email-already-in-use")
                return "Email already in use!";
            if(error.code == "auth/invalid-email")
                return "Email is invalid, please try another one!";
            if(error.code == "auth/weak-password")
                return "The password should be atleast 6 characters long!";
            return "There was a problem with the login process. Please try again!";
        }
    }
    }
   async function handleRegistration(){
      const message = await getRegistrationMessage();
      if(message==="OK")
      {
        navigation.navigate("Home");
        return;
      }
      setAlert(message);
   }
    return (
     
        <>
        <KeyboardAvoidingView behaviour='padding'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className='bg-primaryGreen h-full'>
            <Text className='pb-24'></Text>
        <View  style={{
                    width: '90%',
                    height: 520, 
                    backgroundColor: '#f6f6f6',
                    borderRadius: 20,
                    
                    alignSelf:'center',
                }}>
                    <Text className="pt-10 self-center text-3xl font-bold text-textColor">
                        Register
                    </Text>
                    <Text className="pl-9 pt-12 text-textColor pb-1">E-mail</Text>
                    <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    className="w-72 self-center p-4 h-12 text-textColor rounded-2xl bg-gray"
                    placeholder="yourname@example.com"
                    placeholderTextColor='#929292'
                    onChangeText={(text) => setEmail(text)}
                     />
                     <Text className="pl-9 pt-5 text-textColor pb-1">Password</Text>
                    <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    className="w-72 self-center p-4 h-12 text-textColor rounded-2xl bg-gray"
                    placeholder="*************"
                    placeholderTextColor='#929292'
                    secureTextEntry={true}
                    onChangeText={(text)=> setPassword(text)}
                     />
                    <Text className="pl-9 pt-5 text-textColor pb-1">Confirm Password</Text>
                    <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    className="w-72 self-center p-4 h-12 text-textColor rounded-2xl bg-gray"
                    placeholder="*************"
                    placeholderTextColor='#929292'
                    secureTextEntry={true}
                    onChangeText={(text)=> setConfirmPassword(text)}
                     />

                    {/* Buttons */}
                    <View className='self-center pt-6'>
                    <TouchableOpacity 
                    onPress={handleRegistration}>
                        <View className='w-44 h-12 rounded-full bg-primaryGreen'>
                        <Text className='font-semibold pt-3 text-sm self-center'>REGISTER</Text>
                        </View>
                    </TouchableOpacity>
                     
                     </View>
                     <Text className='text-red pt-3 self-center'>{alert}</Text>
                    <View className='self-center pt-7 flex-row'>
                       <Text> Already have an account?{' '}</Text>
                       <TouchableOpacity
                       onPress={()=>navigation.navigate('Login')}>
                        <Text className='text-darkGreen'>Login now!</Text>
                       </TouchableOpacity>
                    </View>
                </View>   
        </SafeAreaView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView> 
        </>

    );
}
export default RegisterPage;