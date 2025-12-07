import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface TabButtonProps {
    title: string;
    active: boolean;
    onPress: () => void;
}

export default function TabButton({ title, active, onPress }: TabButtonProps) {
    return (
        <TouchableOpacity
            style={[styles.button, active && styles.activeButton]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 24,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeButton: {
        backgroundColor: Colors.primary,
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.gray600,
    },
    activeText: {
        color: Colors.white,
    },
});
