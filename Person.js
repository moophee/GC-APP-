import { Text, View, Button, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import { myStyle } from '../styles/myStyle';

export default function Person({item}){
    //console.log(props)
    return(
        <TouchableOpacity onPress={()=>console.log("id="+item.id)}>
        <View style={myStyle.content}>
            <Text style={myStyle.header}>Name:{item.name} Age:{item.age} Sex:{item.sex}</Text>
        </View>
        </TouchableOpacity>
    )
}

