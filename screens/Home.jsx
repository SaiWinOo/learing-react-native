import {View, Image, Text, FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import SearchInput from "../components/SearchInput";

const COLORS = [
    {colorName: 'Base03', hexCode: '#002b36'},
    {colorName: 'Base02', hexCode: '#073642'},
    {colorName: 'Base01', hexCode: '#586e75'},
    {colorName: 'Base00', hexCode: '#657b83'},
    {colorName: 'Base0', hexCode: '#839496'},
    {colorName: 'Base1', hexCode: '#93a1a1'},
    {colorName: 'Base2', hexCode: '#eee8d5'},
    {colorName: 'Base3', hexCode: '#fdf6e3'},
    {colorName: 'Yellow', hexCode: '#b58900'},
    {colorName: 'Orange', hexCode: '#cb4b16'},
    {colorName: 'Red', hexCode: '#dc322f'},
    {colorName: 'Magenta', hexCode: '#d33682'},
    {colorName: 'Violet', hexCode: '#6c71c4'},
    {colorName: 'Blue', hexCode: '#268bd2'},
    {colorName: 'Cyan', hexCode: '#2aa198'},
    {colorName: 'Green', hexCode: '#859900'},
    {colorName: 'Base2', hexCode: '#eee8d5'},
    {colorName: 'Base3', hexCode: '#fdf6e3'},
    {colorName: 'Yellow', hexCode: '#b58900'},
    {colorName: 'Orange', hexCode: '#cb4b16'},
    {colorName: 'Red', hexCode: '#dc322f'},
    {colorName: 'Magenta', hexCode: '#d33682'},
    {colorName: 'Violet', hexCode: '#6c71c4'},
    {colorName: 'Blue', hexCode: '#268bd2'},
    {colorName: 'Cyan', hexCode: '#2aa198'},
    {colorName: 'Green', hexCode: '#859900'},
];

const ColorBox = ({colorName, hexCode, navigation}) => {
    return (
        <TouchableOpacity onPress={()=> navigation.navigate('Color', {
            colorName, hexCode
        })}>
            <View className='p-2 justify-center mb-1 flex-row '
                  style={{backgroundColor: hexCode,}}>
                <Text>{colorName} {hexCode}</Text>
            </View>
        </TouchableOpacity>
    )
}
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FlatList data={COLORS}
                      renderItem={({item}) => (
                          <ColorBox navigation={navigation} colorName={item.colorName} hexCode={item.hexCode}/>
                      )}
            />
        </SafeAreaView>
    )
}

export default Home;