import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const confirmBooking = () => {
    return(
        <SafeAreaView>
             <View style ={styles.header}>
             
             <Text style={{color:"#fff",fontWeight:"bolder"}}>Welcome, {`( Username )`}</Text>
             <View style={{flexDirection:"row",width:"50px",justifyContent:"space-between"}}>
             <TouchableOpacity><Icon name="bell-o" color="#fff" size={20}></Icon></TouchableOpacity>
             <TouchableOpacity>
               <Link href ="/login" style={{color:"#fff",fontWeight:"bolder"}}>
               <MaterialIcons name="logout" color="#fff" size={20} style={{marginTop:3}}/></Link>
               
            </TouchableOpacity>
            </View>
            </View>
            <View>
            <Text>Booking confirmed!</Text>
            <Link href ="User/userPage">click to go back to your page</Link>
            </View>
            
        </SafeAreaView>
    )
}

export default confirmBooking;

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    header:{
        flexDirection:'row',
        backgroundColor:'#25292e',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between'
    }
})