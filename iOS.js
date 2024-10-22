import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const iOS = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>iOS é um sistema operacional móvel da Apple Inc. desenvolvido originalmente para o iPhone, iPod Touch e o iPad até a introdução do iPadOS em 2019, um sistema derivado do iOS. A Apple não permite que o iOS seja executado em hardware de terceiros. As versões principais do iOS são lançadas anualmente</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default iOS;