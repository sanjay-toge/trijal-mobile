import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Avatar, Card, ListItem } from '@rneui/themed'; // Import Card from the correct library
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { AntDesign } from '@expo/vector-icons';

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;
const home = () => {
  const [carouselItems, setCarouselItems] = useState([
    { title: 'Item 1', price: 162.21, dh: 165, dl: 155 },
    { title: 'Item 2', price: 162.21, dh: 165, dl: 155 },
    { title: 'Item 3', price: 162.21, dh: 165, dl: 155 },
    { title: 'Item 4', price: 162.21, dh: 165, dl: 155 },
  ]);

  const sectors = [
    { title: 'Automobile', trend: true },
    { title: 'Banking & Finance', trend: false },
    { title: 'Consumer Durables', trend: true },
    { title: 'Energy', trend: true },
    { title: 'Healthcare', trend: true },
    { title: 'IT', trend: false },
    { title: 'Metals & Mining', trend: true },
    { title: 'Telecommunications', trend: false },
    { title: 'Real Estate', trend: true },
    { title: 'FMCG', trend: true },
    { title: 'Utilities', trend: false },
    { title: 'Consumer Services', trend: true },
    { title: 'Agriculture', trend: true },
    { title: 'Textiles', trend: false },
    { title: 'Construction', trend: true },
    { title: 'Media & Entertainment', trend: false },
    { title: 'Aerospace & Defence', trend: true },
    { title: 'Chemicals', trend: false },
    { title: 'Infrastructure', trend: true },
    { title: 'Retail', trend: false },
  ]

  const renderItem = ({ item }: { item: { title: string } }) => (
    <View >
      <Text>{item.title}</Text>
    </View>
  );
  return (
    <ScrollView style={{ backgroundColor: 'green' }}>
      <SafeAreaView >
        <View
          style={styles.container}>
          <View style={styles.header}>
            <Image source={require('@/assets/images/trijal_header.png')} style={styles.image} />
            <Ionicons name="notifications" size={24} color="black" />
          </View>
          <View style={{ flex: 3, marginTop: 10 }}>
            <Text style={styles.recommend}>Today's Recommendation:</Text>
            <Carousel
              width={width}
              height={width / 2}
              data={carouselItems}
              renderItem={({ index }) => (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderRadius: 10,
                    margin: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                  }}
                >
                  <View>
                    <Image source={require('@/assets/images/tatamotors.png')} style={styles.card_image} />
                  </View>
                  <View>
                    <Text style={{ textAlign: "center", fontSize: 24 }}>{carouselItems[index].title}</Text>
                    <Text style={{ textAlign: "center", fontSize: 16, marginTop: 5 }}>LTP: {carouselItems[index].price}</Text>
                    <Text style={{ textAlign: "center", fontSize: 16, marginTop: 4 }}>Day High: {carouselItems[index].dh}</Text>
                    <Text style={{ textAlign: "center", fontSize: 16, marginTop: 4 }}>Day Low: {carouselItems[index].dl}</Text>

                  </View>
                </View>
              )}
            />
          </View>
          <View style={{ marginTop: 15, height: 100, alignItems: 'center' }}>
            <Text style={styles.recommend}>Overall Market Trend</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.recommend}>Market Sectors:</Text>
            <View style={{ marginTop: 10 }}>
              <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {sectors.map((item, index) => (
                  <View style={{ height: 50, width: width / 2 }}>
                    {/* <View style={styles.verticalLine} /> */}
                    <ListItem bottomDivider containerStyle={{
                      backgroundColor: 'transparent', // Makes the background transparent
                    }}
                    >
                      <ListItem.Content>
                        <ListItem.Title style={{ fontSize: 14 }}>{item.title}</ListItem.Title>
                      </ListItem.Content>
                      <ListItem.Content right>

                        {item.trend ? (
                          <AntDesign name="arrowup" size={26} color="yellow" />
                        ) : (
                          <AntDesign name="arrowdown" size={26} color="red" />
                        )}

                      </ListItem.Content>
                    </ListItem>
                  </View>
                ))}
              </View>
            </View>
          </View>
          {/* <View style={{ flex: 3 }} ></View> */}
          <View style={{ marginTop: 15, marginBottom: 15 }}>
            <Text style={styles.recommend}>Previous Recommendations:</Text>
            <View style={{marginTop: 15}}>
              <ListItem containerStyle={{
                backgroundColor: 'transparent', // Makes the background transparent
                borderWidth: 1,
                height: 50
              }}
              >
                <ListItem.Content>
                  <ListItem.Title style={{ fontSize: 14 }}>Test</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10, marginRight: 12
  },
  image: {
    width: 80,
    height: 40,
  },
  card: {
    borderRadius: 10,
    padding: 0,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image_car: {
    width: '100%',
    height: 150,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  recommend: {
    marginTop: 12,
    fontSize: 18,
    marginLeft: 10
  },
  card_image: {
    width: 150,
    height: 150
  },
  verticalLine: {
    width: 1, // Line width
    height: '100%', // Fill the available vertical space
    backgroundColor: 'black', // Line color
  },
});

export default home
