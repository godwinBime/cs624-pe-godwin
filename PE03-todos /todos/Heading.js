import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Heading = () =>(
    <View style={styles.header}>
        <Text style={styles.heaederText}>todos</Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        marginTop: 80,
    },
    heaederText: {
        textAlign: 'center',
        fontSize: 72,
        color: 'rgba(175, 47, 47, 0.25)',
        fontWeight: '100',
    },
});

export default Heading;