import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Categories, COLOURS} from '../database/item';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import {Colors} from 'react-native/Libraries/NewAppScreen';
const Home = ({navigation}) => {
  const [data, setData] = useState([0]);
  const renderItems = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.push('Details', {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            crust: data.crust,
            delivery: data.delivery,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
            navigation: navigation,
          })
        }>
        <View
          style={{
            width: '90%',
            height: 160,
            backgroundColor: COLOURS.white,
            borderRadius: 20,
            elevation: 4,
            position: 'relative',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginBottom: 50}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                display: data.isTopOfTheWeek ? 'flex' : 'none',
              }}>
              <FontAwesome
                name="crown"
                style={{
                  fontSize: 10,
                  color: COLOURS.accent,
                }}
              />
            
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.black,
                  opacity: 0.8,
                  marginLeft: 5,
                }}>
                top of the week
              </Text>
            </View>
            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: 'bold',
                paddingTop: 10,
              }}>
              {data.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}>
              {data.weight}
            </Text>
          </View>
          <View style={{width: 150, height: 150, marginRight: -45}}>
            <Image
              source={data.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 85,
                height: 50,
                backgroundColor: COLOURS.accent,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="plus"
                style={{fontSize: 18, color: COLOURS.black}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <AntDesign
                name="star"
                style={{fontSize: 12, color: COLOURS.black, paddingRight: 5}}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: COLOURS.black,
                  fontWeight: 'bold',
                }}>
                {data.rating}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => setData(index)}>
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: data == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <View style={styles.innerItem}>
            <Image source={item.image} style={styles.itemImg} />
          </View>
          <Text style={{fontSize: 18, color: COLOURS.black, fontWeight: '600'}}>
            {item.name}
          </Text>
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 100,
              backgroundColor:
                data == index ? COLOURS.white : COLOURS.accentRed,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name="forward"
              style={{
                fontSize: 14,
                color: data == index ? COLOURS.black : COLOURS.white,
              }}></Icon>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <StatusBar backgroundColor={COLOURS.accent} barStyle="dark-content" />
          <Image
            source={require('../database/images/background.png')}
            style={styles.img}
          />
          <View style={styles.imageHeader}>
            <TouchableOpacity style={{width: 40, height: 40}}>
              <Image
                source={require('../database/images/prof.jpg')}
                style={styles.profImg}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="segment" style={styles.icon}></Icon>
            </TouchableOpacity>
          </View>
          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 16,
                color: COLOURS.black,
                opacity: 0.5,
                fontWeight: '400',
              }}>
              Food
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: COLOURS.black,
                letterSpacing: 0.2,
                fontWeight: '600',
              }}>
              delivery
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name="search"
              style={{fontSize: 25, color: COLOURS.black, opacity: 0.8}}></Icon>
            <TextInput
              placeholder="search..."
              style={{
                color: Colors.black,
                fontSize: 16,
                paddingVertical: 5,
                paddingHorizontal: 1,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black + 20,
                width: '90%',
                marginLeft: 10,
                letterSpacing: 1,
              }}
            />
          </View>
          <Text style={styles.categories}>Categories</Text>
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLOURS.black,
            }}>
            Populor
          </Text>
          {Categories[data].items.map(renderItems)}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
  },
  header: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
    position: 'relative',
  },
  img: {
    position: 'absolute',
    top: 0,
    left: -100,
  },
  imageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  profImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    borderRadius: 500,
  },
  icon: {
    fontSize: 27,
    color: COLOURS.black,
  },
  categories: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '700',
    color: COLOURS.black,
    letterSpacing: 1,
  },
  item: {},
  innerItem: {
    width: 60,
    height: 60,
  },
  itemImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  render_categorie: {
    width: 120,
    height: 180,
    justifyContent: 'space-evenly',
    alignItems: 'center',

    borderRadius: 20,
    margin: 10,
    elevation: 5,
  },
});
