import { Text, View, TouchableOpacity } from 'react-native';
import { myStyle } from '../styles/myStyle';

export default function Person({ item, deldata }) {
    return (
        <TouchableOpacity onPress={() => deldata(item.id)}>
            <View style={myStyle.content}>
                <Text style={myStyle.header}>Name: {item.name} Age: {item.age} Sex: {item.sex}</Text>
            </View>
        </TouchableOpacity>
    );
}
