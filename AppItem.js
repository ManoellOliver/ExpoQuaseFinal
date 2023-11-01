import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function AppItem(props){

    return(
        <view style ={styles.container}>
            <Text style={styles.textItem}>{props.item}</Text>
        <view style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.deleteButton}>
                <text style={styles.buttonText}>X</text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.editButton}>
                <text style={styles.buttonText}>Editar</text>
            </TouchableOpacity>
        </view>
        </view>
    )
}