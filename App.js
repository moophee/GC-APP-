import { FlatList } from 'react-native';
import { myStyle } from './styles/myStyle';
import { useState } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import Person from './components/Person';
import AddForm from './components/addform';
export default function App() {
    const [Dev, setDev] = useState({ name: "Meepooh", year: 2023 });
    const [data, setData] = useState([
        { id: 1, name: "Copter", age: 16, sex: "Male" },
        { id: 2, name: "Peking", age: 15, sex: "Male" },
        { id: 3, name: "Dawn", age: 15, sex: "Male" },
        { id: 4, name: "Boston", age: 15, sex: "Male" },
        { id: 5, name: "Noon", age: 16, sex: "Female" },
        { id: 6, name: "Proud", age: 16, sex: "Female" },
        { id: 7, name: "Captain", age: 16, sex: "Male" },
        { id: 8, name: "Prom", age: 16, sex: "Male" },
    ]);
    const deldata = (id) => {
        console.log("Attempting to delete item with id:", id);
        setData((prevData) => {
            const updatedData = prevData.filter((item) => item.id !== id);
            console.log("Updated data:", updatedData);
            return updatedData;
        });
    };
    return (
      <View style={myStyle.container}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
            <Person item={item} deldata={deldata} />
          )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<Text style={myStyle.header}>ข้อมูล</Text>}
        ListEmptyComponent={<Text>ไม่มีข้อมูล</Text>}/>
      <AddForm/>
      </View>
    );
}
