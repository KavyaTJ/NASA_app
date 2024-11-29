import axios from 'axios';
import React, {useState } from 'react'
import { View ,Text, SafeAreaView,StyleSheet} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function RandomAsteroid({route}:any) {

const{Randominfo}=route.params;
const[Error,SetError]=useState<boolean>(false)
const[loading,SetLoading]=useState<boolean>(false)
  return (
    <SafeAreaView>
    {Randominfo ? (
      <>
        <View  style={{ marginLeft:10 ,marginTop:50}}>
          
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.head}>ID: </Text>
            <Text style={styles.subhead1}>{Randominfo.id}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.head}>Name: </Text>
            <Text style={styles.subhead2}>{Randominfo.name}</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.head}>NASA JPL URL:</Text>
            <Text style={styles.subhead3}>{Randominfo.nasa_jpl_url}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.head}>Is Potentially Hazardous Asteroid: </Text>
            <Text style={styles.subhead4}> {JSON.stringify(Randominfo.is_potentially_hazardous_asteroid)}</Text>
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
  )
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