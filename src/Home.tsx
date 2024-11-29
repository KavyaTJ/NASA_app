import React, { useState } from "react";
import { View, SafeAreaView ,StyleSheet} from "react-native";
import { TextInput ,Button} from 'react-native-paper';
import axios from "axios";


function Home({ navigation }: any) {
  const [asteroidId, setAsteroidId] = useState('');

const handleAsteroidSubmit =async () => {
  try {
      const response = await axios.get(
        ` https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=HsgDUdnGW2oFnTMOJB7oRvm8QudGG4m9ug3eC5mL`
      );
      console.log(response.data.near_earth_objects)
      const Randominfo=response.data.near_earth_objects[Math.floor(Math.random() * response.data.near_earth_objects.length)];
       console.log(Randominfo);
      navigation.navigate("RandomAsteroid",{Randominfo}); 
      

  } catch (error) {
      console.log(error)
  }
};

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <TextInput
        style={styles.container}
        label="Enter Asteroid Id "
        mode="outlined"
        keyboardType = 'number-pad'
        theme={{ colors: { primary: "gray" } }}
        value={asteroidId}
        onChangeText={(text) => {
          setAsteroidId(text);
          
        }}
      />

      <Button
        disabled={asteroidId.length == 0}
        style={styles.button}
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        contentStyle={{ 
          height:52
         }}
        onPress={() => {
          navigation.navigate("About Astroid", { Id: asteroidId });
        }}
      >
        Submit
      </Button>
      

      <Button
        style={styles.button1}
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        onPress={handleAsteroidSubmit}
        contentStyle={{ 
         height:52
        }}
      >
        Random Asteroid
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:60,
    width:300,
    borderColor:'blue',
    marginBottom:60,
  
  },
  button: {
    width:260,
    borderRadius:15,
  },
  button1: {
    width:260,
    marginTop:40,
    borderRadius:15,

  },
});

export default Home;