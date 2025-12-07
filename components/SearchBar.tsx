import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

interface SearchBarProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

export default function SearchBar({
    placeholder = 'Rechercher une voiture',
    value,
    onChangeText
}: SearchBarProps) {
    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={20} color={Colors.gray400} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={Colors.gray400}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 24,
        paddingHorizontal: 16,
        height: 48,
        borderWidth: 1,
        borderColor: Colors.gray200,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: Colors.gray900,
    },
});
