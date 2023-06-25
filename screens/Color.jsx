import {Text, View} from "react-native";

const Color = ({ route }) => {
    const { colorName , hexCode} = route.params;
    return (
        <View style={{ backgroundColor : hexCode}} className='flex-1 justify-center items-center'>
            <Text>{colorName} - {hexCode}</Text>
        </View>
    );
};

export default Color;