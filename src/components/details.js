import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOURS} from '../database/item';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Details = ({route, navigation}) => {
  const {
    name,
    price,
    image,
    size,
    crust,
    delivery,
    ingredients,
    isTopOfTheWeek,
  } = route.params;
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLOURS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="angle-left"
            style={{fontSize: 16, color: COLOURS.black}}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: COLOURS.accent,
            opacity: isTopOfTheWeek ? 1 : 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="star" style={{fontSize: 16, color: COLOURS.white}} />
        </View>
      </View>
      <Text
        style={{
          fontSize: 38,
          color: COLOURS.black,
          fontWeight: '800',
          paddingHorizontal: 20,
          maxWidth: 310,
        }}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.accentRed,
            fontWeight: '900',
            paddingHorizontal: 5,
            paddingBottom: 8,
          }}>
          ₹
        </Text>
        <Text style={{fontSize:38,color:COLOURS.accentRed,fontWeight:'900'}}></Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
