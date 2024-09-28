import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,View,TextInput,TouchableOpacity } from "react-native";
import { Modal,Keyboard } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Firebase_Auth } from "../FirebaseConfig";
const LoginPage = ({navigation}) => {
    
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [alert, setAlert] = useState('');
    const auth = Firebase_Auth;
    
    const getSignInMessage= async () => {
        try{
            const response = await signInWithEmailAndPassword(auth,email,password);
            return "OK";
        }catch(error){
            return "Wrong email or password. Please try again!";
        }
    }
    async function handleSignIn(){
        const message = await getSignInMessage();
        if(message==="OK")
        {
           navigation.navigate('Home');
           return;
        }
        setAlert(message);
    }
    return (
        <>
            <KeyboardAvoidingView behaviour='padding'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className='bg-primaryGreen h-full'>
            <Text className='pb-36'></Text>
        <View  style={{
                    width: '90%',
                    height: 465,
                    backgroundColor: '#f6f6f6',
                    borderRadius: 20,
                    
                    alignSelf:'center',
                }}>
                    <Text className="pt-10 self-center text-3xl font-bold text-textColor">
                        Login
                    </Text>
                    <Text className="pl-9 pt-12 text-textColor pb-1">E-mail</Text>
                    <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    className="w-72 self-center p-4 h-12 text-textColor rounded-2xl bg-gray"
                    placeholder="yourname@example.com"
                    placeholderTextColor='#929292'
                    onChangeText={(text)=>setEmail(text)}
                     />
                     <Text className="pl-9 pt-5 text-textColor pb-1">Password</Text>
                    <TextInput
                    autoCapitalize="none"
                    className="w-72 self-center p-4 h-12 text-textColor rounded-2xl bg-gray"
                    placeholder="*************"
                    placeholderTextColor='#929292'
                    secureTextEntry={showPassword}
                    onChangeText={(text)=>setPassword(text)}
                     />
                     <View className='pl-7 pt-3 flex-row'>
                    <TouchableOpacity 
                    onPress = {() => setShowPassword(!showPassword)}
                    className={`ml-2 rounded w-4 h-4 ${ showPassword ?  'bg-gray' : 'bg-textColor'}`}> 
                        <Text></Text>
                    </TouchableOpacity>
                    <Text className='pl-1'>Show Password</Text>
                    </View>

              
                    <View className='self-center pt-6'>
                    <TouchableOpacity 
                    onPress={handleSignIn}>
                        <View className='w-44 h-12 rounded-full bg-primaryGreen'>
                        <Text className='font-semibold pt-3 text-sm self-center'>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                     </View>
                     <Text className='text-red pt-3 self-center'>{alert}</Text>
                    <View className='self-center pt-9 flex-row'>
                       <Text> Don't have an account?{' '}</Text>
                       <TouchableOpacity
                       onPress={()=>navigation.navigate('Register')}>
                        <Text className='text-darkGreen'>Register now!</Text>
                       </TouchableOpacity>
                    </View>
                </View>
        </SafeAreaView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView> 
        </>
    );
}
export default LoginPage;