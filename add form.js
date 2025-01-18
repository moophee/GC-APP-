import {View,TextInput, Button} from "react-native";
import { myStyle } from "../styles/myStyle";
export default function AddForm(){
    return(
        <View> 
            <TextInput placeholder="Input name" keyboardType="default" style={myStyle.input}/>
            <TextInput placeholder="Input age" keyboardType="number-pad" style={myStyle.input}/>
            <Button title="Submit"/>
        </View>
    )
}
