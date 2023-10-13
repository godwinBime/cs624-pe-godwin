import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';

const App = () =>{
  return(
    <ScrollView>
      <View>        
        <Image
        source={require('./assets/icon.png')} 
        style={styles.imgStyle}/>        
      </View>

      <View>
        <Text>Which course did you like?</Text>
        <TextInput style={styles.txtInput} defaultValue='ex. CS624'/>
      </View>      

      <View>
      <Text style={styles.txt}>Core Requirements (24 credits)</Text>
      <Text>CS 504	Software Engineering</Text>
      <Text>CS 506	Programming for Computing</Text>
      <Text>CS 519	Cloud Computing Overview</Text>
      <Text>CS 533	Computer Architecture</Text>
      <Text>CS 547	Secure Systems and Programs</Text>
      <Text>CS 622	Discrete Math and Algorithms for Computing</Text>
      <Text>DS 510	Artificial Intelligence for Data Science</Text>
      <Text>DS 620	Machine Learning & Deep Learning</Text>
      <Text style={{marginBottom: 40}}></Text>
      </View>
      
      <View>
      <Text style={styles.txt}>Depth of Study (6 credits)</Text>
      <Text>CS 624	Full-Stack Development I</Text>
      <Text>CS 624	Full-Stack Development II</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  txtInput:{
    height: 40,
    margin: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  imgStyle:{
    width: 200, 
    height:200,
    margin: 50
  },
  txt:{
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#fff000',
  },
});




export default App;

