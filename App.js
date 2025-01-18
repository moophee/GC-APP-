import { FlatList } from 'react-native';
import { myStyle } from './styles/myStyle';
import { useState } from 'react';
import { Text, View, Image, ScrollView, Button} from 'react-native';
import Person from './components/Person';

export default function App(){
    const [Dev,setDev] = useState({name:"Meepooh",year:2023})
    const [data,setdata]=useState([
      { id:1,name : "A",age:16,sex:"ale"},
      { id:2,name : "B",age:15,sex:"Male"},
      { id:3,name : "C",age:15,sex:"Male"},
      { id:4,name : "D",age:15,sex:"Male"},
      { id:5,name : "E",age:16,sex:"Female"},
      { id:6,name : "F",age:16,sex:"Female"},
      { id:7,name : "G",age:16,sex:"Male"},
      { id:8,name : "H,",age:16,sex:"Male"},

    ])

    const deldata=(id)=>{
      setdata((prevdata)=>{
        return prevdata.filter((item)=>item.id!=id);
      })  
    }
    return(
      <ScrollView>
        <View style={myStyle.container}>
        <FlatList 
          data={data}
          renderItem={({item})=>(
            <Person item={item} deldata={deldata}/>
          )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={myStyle.header}>ข้อมูล</Text>}
        ListEmptyComponent={<Text>ไม่มีข้อมูล</Text>}
        />
        </View>
      </ScrollView>
    );
} 
