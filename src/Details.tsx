import axios from 'axios';
import React, { useCallback, useEffect,useState } from 'react'
import { View ,Text, SafeAreaView,StyleSheet} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';


interface asteroid{
    id:number,
    name:string,
    nasa_jpl_url:string,
    is_potentially_hazardous_asteroid:boolean
}

export default function Details({route}) {

    const[asteroidData,setasteroidData]=useState<asteroid>()
    const[Error,SetError]=useState<boolean>(false)
    const[loading,SetLoading]=useState<boolean>(false)
    
    const handleSubmit = useCallback(async () => {
        try {
            const response = await axios.get(
                ` https://api.nasa.gov/neo/rest/v1/neo/${route.params.Id}?api_key=HsgDUdnGW2oFnTMOJB7oRvm8QudGG4m9ug3eC5mL`
            );
            console.log(response.data)
            setasteroidData(response.data)
         
        } catch (error) {
            console.log(error)
            SetError(true);
        }
    }, []);
    
    useEffect(() => {
      handleSubmit();
    }, [handleSubmit]);
  return (
    <SafeAreaView>
      {asteroidData ? (
        <>
          <View  style={{ marginLeft:10 ,marginTop:60}}>
          
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.head}>ID: </Text>
              <Text style={styles.subhead1}>{asteroidData.id}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.head}>Name: </Text>
              <Text style={styles.subhead2}>{asteroidData.name}</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.head}>NASA JPL URL:</Text>
              <Text style={styles.subhead3}>{asteroidData.nasa_jpl_url}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.head}>Is Potentially Hazardous Asteroid: </Text>
              <Text style={styles.subhead4}> {JSON.stringify(asteroidData.is_potentially_hazardous_asteroid)}</Text>
            </View>
    
          </View>
       
        </>
      ) : (
        <View>
          {Error ? (
            <>
              <View>
                <Text>Info not found</Text>
              </View>
            </>
          ) : (
            <View>
              {loading ? (
                  <ActivityIndicator animating={true} color="blue" size='large'/>
              ) : (
                <ActivityIndicator animating={true} color="blue" size='large'/>
              )}
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
  marginTop:30,
  color:"#272e6e",
  fontSize:24,
  fontWeight:"600"
  },

  subhead1: {
    marginTop:30,
    fontSize:24,
    fontWeight:"600"
  },
  subhead2: {
    marginTop:30,
    fontSize:24,
    fontWeight:"600"
  },
  subhead3: {
    fontSize:24,
    fontWeight:"600",

  },
  subhead4: {
    marginTop:30,
    fontSize:24,
    fontWeight:"600"
  },
});