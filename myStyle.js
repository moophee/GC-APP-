import { StyleSheet } from "react-native";
export const myStyle = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: '#f2faff'
    },
    row:{
      flex: 1,
      flexDirection:"row"
    },
    header: {
        fontSize:15.5,
        fontWeight : "bold",
        fontFamily:"",
        marginBottom:10,
        marginTop:8,
        marginLeft:10,
    },
    toppic:{
      fontSize: 15,
      fontWeight : "bold",
      fontFamily:"",
      marginTop:10,
      marginBottom:10,
      marginLeft:45,
    },
    image:{
      width: 150,
      height:150,
      marginBottom: 20,
      borderRadius:20, 
      borderWidth: 2, 
      borderColor: '#ccc', 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3, 
      shadowRadius: 4, 
      elevation: 5, 
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginBottom: 15,
      color:"red"

    },
    story:{
      fontSize:20,
      fontWeight : "",
      fontFamily:"Roboto",
   },
   buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly", 
    alignItems: "center", 
    width: "75%", 
    },
    content: {
        width: 275,
        textAlign: "center",
        height: 50,
        backgroundColor:"white",
        marginTop:15,
        borderWidth:2,
        borderColor:"gray",
        borderStyle:"solid",
        borderRadius: 10
     },
      input: {
        height:40,
        margin: 12,
        borderwidth: 1,
        padding: 10,
        borderradius: 5
      },
});

