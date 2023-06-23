import { View, Image } from "react-native";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
      <View>
        <View>
        <Image style={{ width : 40, height : 40 }} source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png'
              }} />
      </View>
      <View>
        <SearchInput onSearch={(e)=> console.log(e)}></SearchInput>
      </View>
      </View>
    )
}

export default Home;