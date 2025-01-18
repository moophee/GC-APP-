import { FlatList } from 'react-native';
import { myStyle } from './styles/myStyle';
import { useState } from 'react';
import { Text, View, Image, ScrollView, Button} from 'react-native';
import Person from './components/Person';

export default function App(){
    const [Dev,setDev] = useState({name:"Meepooh",year:2023})
    const [data,setdata]=useState([
      { id:1,name : "A",age:16,sex:"ale"},
      { id:1,name : "B",age:15,sex:"Male"},
      { id:1,name : "C",age:15,sex:"Male"},
      { id:1,name : "D",age:15,sex:"Male"},
      { id:1,name : "E",age:16,sex:"Female"},
      { id:1,name : "F",age:16,sex:"Female"},
      { id:1,name : "G",age:16,sex:"Male"},
      { id:1,name : "H,",age:16,sex:"Male"},

    ])
    return(
      <ScrollView>
        <View style={myStyle.container}>
        <FlatList 
          data={data}
          renderItem={({item})=>(
            <Person item={item}/>
          )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={myStyle.header}>ข้อมูล</Text>}
        ListEmptyComponent={<Text>ไม่มีข้อมูล</Text>}
        />
        </View>
      </ScrollView>
    );
} 
