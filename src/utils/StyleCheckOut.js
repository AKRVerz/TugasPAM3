import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'green',
        
    },
    upper:{
        alignItems:'center',
        backgroundColor: 'green',
        height: 150,
    },
    marginMain:{
        marginVertical: 20,
        marginHorizontal: 10,
    },
    viewCard:{
        flexDirection: "row",
        padding: 10,
    },
    viewImage:{
        flex: 1,
    },
});
export default styles;