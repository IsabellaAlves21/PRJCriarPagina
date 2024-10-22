import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Android = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Android é um sistema operacional baseado no núcleo Linux, projetado principalmente para dispositivos eletrônicos móveis com tela sensível ao toque ou interface de usuário baseada na manipulação</Text>
            {/* Botão para á página inicial */}
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
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

export default Android;