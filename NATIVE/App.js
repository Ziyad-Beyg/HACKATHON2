import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./Src/Config/Firebase";


export function SignUpScreen({navigation}) {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ErrorMessage, setErrorMessage] = useState('')

      let signUpFuntion = async () =>{
        if (setEmail == '' && setPassword == ''){
          setTimeout(()=>{
            setErrorMessage("INPUT FIELDS CAN NOT BE EMPTY")
          },1)

          setTimeout(()=>{
            setErrorMessage('')
          },3000)
        }
        else{
          try{
            const {user} = await createUserWithEmailAndPassword(auth, Email, Password)
            console.log(user)
            navigation.push('Home')
          }
          catch(error){
            setTimeout(()=>{
              setErrorMessage("Email Already In Use!!")
            },1)

            setTimeout(()=>{
              setErrorMessage('')
            },3000)
          }
        }

      }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:'36px', color:'green', marginBottom:'30px', fontWeight: 900}}>SIGN UP </Text>

      <TextInput
        style={{outline:'none', marginTop:'20px',backgroundColor:'white', width:'300px', paddingLeft:'10px', height:'50px', fontSize:'20px'}}
        onChangeText={setEmail}
        value={Email}
        placeholder="User Email"
        keyboardType="default"
      />

      <TextInput
        style={{outline:'none', marginTop:'20px',backgroundColor:'white', marginBottom:'20px', width:'300px', paddingLeft:'10px', height:'50px', fontSize:'20px'}}
        onChangeText={setPassword}
        value={Password}
        placeholder="User Password"
        keyboardType="password"
        secureTextEntry="true"
      />

    <TouchableOpacity >
      <Text style={{color:'red', marginBottom:'20px'}}>
        {ErrorMessage}
      </Text>
        <Button  title='SIGN UP' onPress={signUpFuntion} />
        <Text style={{marginTop:'20px'}}>
          Already have an Account?? 
          <TouchableOpacity style={{marginLeft:'10px', color:'blue'}}>
              <Text onPress={()=>{
                navigation.navigate('SignIN')
              }}>
                LOG IN
              </Text>
          </TouchableOpacity>
      </Text>
    </TouchableOpacity>
    </View>
  );
}


export function SignInScreen({navigation}) {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [ErrorMessage, setErrorMessage] = useState('')

      let signInFuntion = async () =>{
        if (setEmail == '' && setPassword == ''){
          setTimeout(()=>{
            setErrorMessage("INPUT FIELDS CAN NOT BE EMPTY")
          },1)

          setTimeout(()=>{
            setErrorMessage('')
          },3000)
        }
        else{
          try{
            const {user} = await signInWithEmailAndPassword(auth, Email, Password)
            console.log(user)
            navigation.push('Home')
          }
          catch(error){
          
            setTimeout(()=>{
              setErrorMessage("Email Already In Use!!")
            },1)
  
            setTimeout(()=>{
              setErrorMessage('')
            },3000)
          }
          
        }



      }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:'36px', color:'green', marginBottom:'30px', fontWeight: 900}}>SIGN IN </Text>

      <TextInput
        style={{outline:'none', marginTop:'20px',backgroundColor:'white', width:'300px', paddingLeft:'10px', height:'50px', fontSize:'20px'}}
        onChangeText={setEmail}
        value={Email}
        placeholder="User Email"
        keyboardType="default"
      />

      <TextInput
        style={{outline:'none', marginTop:'20px',backgroundColor:'white', marginBottom:'20px', width:'300px', paddingLeft:'10px', height:'50px', fontSize:'20px'}}
        onChangeText={setPassword}
        value={Password}
        placeholder="User Password"
        keyboardType="password"
        secureTextEntry="true"
      />

      <Text style={{color:'red', marginBottom:'20px'}}>
        {ErrorMessage}
      </Text>
        <Button title='SIGN IN' onPress={signInFuntion} />
        <Text style={{marginTop:'20px'}}>
          Don't have an Account? 
          <TouchableOpacity style={{marginLeft:'10px', color:'blue'}}>
              <Text onPress={()=>{
                navigation.navigate('SignUP')
              }}>Sign Up</Text>
          </TouchableOpacity>
          </Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:'36px', color:'orange', marginBottom:'30px', fontWeight: 900}}>USER DETAILS </Text>

      <TextInput
        style={{outline:'none', marginTop:'20px',backgroundColor:'white', marginBottom:'20px', width:'300px', paddingLeft:'10px', height:'50px', fontSize:'20px'}}
        onChangeText={setPassword}
        value={Password}
        placeholder="User CNIC"
        keyboardType="default"
      />
      <TextInput
      style={{outline:'none', marginTop:'20px',backgroundColor:'white', marginBottom:'20px', width:'300px', paddingLeft:'10px', height:'50px', fontSize:'20px'}}
      onChangeText={setPassword}
      value={Password}
      placeholder="Father Name"
      keyboardType="default"

    />
    <TextInput
        style={{outline:'none', marginTop:'20px',backgroundColor:'white', marginBottom:'20px', width:'300px', paddingLeft:'10px', height:'50px', fontSize:'20px'}}
        onChangeText={setPassword}
        value={Password}
        placeholder="User Password"
        keyboardType="password"
        secureTextEntry="true"
      />
    <TouchableOpacity >
        <Text onPress={()=>{
      navigation.push('SignUP')
    }}>
          GO TO SIGNUP SCREEN
        </Text>
    </TouchableOpacity>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="SignUP" options='SIGNUP SCREEN' component={SignUpScreen} />
        <Stack.Screen name="SignIN" options='SIGNIN SCREEN' component={SignInScreen} />
        <Stack.Screen name="Home" options='HOME SCREEN' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;