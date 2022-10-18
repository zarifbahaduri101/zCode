import { React, useState } from "react";
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Image } from 'react-native';

let mProducts = [
  { imageurl: require('./files/Mouse.png'), id: 0, name: 'Mouse', count: 12 },
  { imageurl: require('./files/Keyboard.png'), id: 1, name: 'Keybaord', count: 11 },
  { imageurl: require('./files/Screen.png'), id: 2, name: 'Screen', count: 15 },
  { imageurl: require('./files/Laptop.png'), id: 3, name: 'Laptop', count: 12 },
  { imageurl: require('./files/Phone.png'), id: 4, name: 'Phone', count: 10 },
  { imageurl: require('./files/Charger.png'), id: 5, name: 'Charger', count: 5 },
  { imageurl: require('./files/ScreenProtector.png'), id: 6, name: 'Screen Protector', count: 9 },
  { imageurl: require('./files/Motherboard.png'), id: 7, name: 'Motherboard', count: 5 },
  { imageurl: require('./files/Processor.png'), id: 8, name: 'Processer', count: 10 },
  { imageurl: require('./files/CdPlayer.png'), id: 9, name: 'CD Player', count: 3 },
  { imageurl: require('./files/Camera.png'), id: 10, name: 'Camera', count: 8 },
  { imageurl: require('./files/Ipad.png'), id: 11, name: 'iPad', count: 7 },
];

export default function zApp() {

  let [products, setProduct] = useState(mProducts)

  function salling(id) {

    setProduct((currentData) => {
      return currentData.filter(item => {
        if (item.id == id) {
          item.count--;
        }
        return item;
      })
    });

  }


  function purchasing(id) {

    setProduct((currentData) => {
      return currentData.filter(item => {
        if (item.id == id) {
          item.count++;
        }
        return item;
      })
    });

  }


  return (

    <View style={style.container}>

      <View style={{ marginTop: 30 }}>
        <Text style={style.title}>DASHBOARD</Text>
      </View>

      <FlatList
        numColumns={3}
        keyExtractor={(item) => (item.id)}
        data={products}
        renderItem={({ item }) => (

          <TouchableOpacity>

            <View style={style.listViewSTyle}>

              <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={item.imageurl}
                  style={{ width: 35, height: 35 }} />
              </View>

              <View style={style.itemName}>
                <Text style={style.title}>{item.name}</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row" }}>

                <View style={{ flex: 1, alignItems: "flex-end" }} >
                  <Text style={style.itemCount} >{item.count}</Text>
                </View>

                <View style={{ flex: 1, alignItems: "flex-end" }} >
                  <Text style={style.itemCount} onPress={() => { salling(item.id) }}>-</Text>
                </View>

                <View style={{ flex: 1, alignItems: "flex-end" }} >
                  <Text style={style.itemCount} onPress={() => { purchasing(item.id) }}>+</Text>
                </View>


              </View>

            </View>


          </TouchableOpacity>

        )}
      />


    </View>


  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    alignItems:"center",
    justifyContent:'center'
  },

  title: {
    fontSize: 17,
    textAlign: "center"
  },

  listViewSTyle: {
    backgroundColor: 'pink',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'pink',
    width: 100,
    height: 100,
    margin: 5,
    padding: 5,
  },

  itemName: {
    borderLeftColor: '#CE0074',
    borderLeftWidth: 3,
    padding: 7,
    flex: 1
  },
  itemCount: {
    borderRadius: 50,
    borderWidth: 0.5,
    padding: 3,
    backgroundColor: '#CE0074',
    textAlign: "center",
    color: '#fff',
    flex: 1,
    width: 24,
    height: 24,
  }


})