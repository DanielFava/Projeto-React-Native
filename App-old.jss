
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
/*import { Colors } from 'react-native/Libraries/NewAppScreen';*/


export default class App extends Component{
  render(){
    return(
      <View style={styles.View}>
        <Text style={styles.Text}>Pagina Main</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View:{
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: "#FF0"
  }
});

