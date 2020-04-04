import React from 'react';
import { StyleSheet, Image, FlatList, Text, View, TextInput} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import Images from '../assets/images'


const CountryTile = (props) => {
  return(
    <View style={styles.imageContainer}>
      <Text style={styles.countryName}>{props.country.replace(/_/g, ' ')}</Text>
      <Image style={styles.image} source={props.img} />
    </View>
  )
}


export const PhotoScreen = () => {
  // Sort the images
  const data = Images.flags.slice();
  data.sort((a, b) => a.country.localeCompare(b.country));
  const [search, setSearch] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(()=> {
    let filtered = data.filter(data => data.country.match(search.toLowerCase()));
    setFilteredData(filtered);
  }, [search])

  return (
    <View>
      <Text>This is the photo screen. Just a big scrolling view of flags.</Text>
      <Text>Icons made by Freepik from www.flaticon.com</Text>
      <Text>Number of flags: {filteredData.length}</Text>
      <TextInput 
        style={styles.searchBox}
        autoCapitalize='none'
        onChangeText={setSearch}
      />
      <FlatList 
        data={filteredData}
        renderItem={({item}) => <CountryTile country={item.country} img={item.img}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    // backgroundColor: 'white',
  },
  searchBox: {
    backgroundColor: 'pink'
  },
  image: {
    height: 100,
    width: 100,
  },
  countryName: {
    textTransform: 'capitalize',
    marginBottom: 5,
    // fontWeight: 'bold',
    alignItems: 'center',
  },
})
