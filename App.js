// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


  
import * as React from 'react';
import { Text, View , Button, Alert, StyleSheet, StatusBar} from 'react-native';
import Firebase from './firebase'

function createTwoButtonAlert(){
  Alert.alert(
    "Are you sure",
    "You want to logout?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => 
        Firebase.auth()
        .signOut()
        .then(() => console.log('User signed out!'))
        .catch(error => console.log(error))

      
      }
        
    ]
  );
  
}
export default function App() {
  return (
   <View style={styles.container}>
     <Button style={{backgrundColor:"blue"}}
              onPress={() => createTwoButtonAlert()}
              title="Logout"
              color="#000"
            />
     <Text>
       Hello World
     </Text>
     <StatusBar style="auto" />
   </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});