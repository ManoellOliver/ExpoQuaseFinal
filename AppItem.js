import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Database from './Database';

export default function AppItem(props){
    async function handleEditPress(){
        const item = await Database.geItem(props.id);
        props.navigation.navigate("Appforms", item);
    }

    return(
        <view style ={styles.container}>
            <Text style={styles.textItem}>{props.item}</Text>
        <view style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.deleteButton}>
                <text style={styles.buttonText}>X</text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.editButton}
            onPress={handleEditPress}>
                <text style={styles.buttonText}>Editar</text>
            </TouchableOpacity>
        </view>
        </view>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginTop: 20,
      width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    }
  });
