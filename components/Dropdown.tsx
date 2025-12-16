import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

interface DropdownOption {
    label: string;
    value: string;
}

interface DropdownProps {
    label: string;
    value: string;
    options: DropdownOption[];
    onSelect: (value: string) => void;
    placeholder?: string;
}

export default function Dropdown({ label, value, options, onSelect, placeholder }: DropdownProps) {
    const [isVisible, setIsVisible] = React.useState(false);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
                style={styles.dropdown}
                onPress={() => setIsVisible(true)}
            >
                <Text style={[styles.dropdownText, !selectedOption && styles.placeholder]}>
                    {selectedOption?.label || placeholder || 'Sélectionner'}
                </Text>
                <Ionicons name="chevron-down" size={20} color={Colors.gray600} />
            </TouchableOpacity>

            <Modal
                visible={isVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setIsVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setIsVisible(false)}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{label}</Text>
                            <TouchableOpacity onPress={() => setIsVisible(false)}>
                                <Ionicons name="close" size={24} color={Colors.gray900} />
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.option,
                                        item.value === value && styles.selectedOption
                                    ]}
                                    onPress={() => {
                                        onSelect(item.value);
                                        setIsVisible(false);
                                    }}
                                >
                                    <Text style={[
                                        styles.optionText,
                                        item.value === value && styles.selectedOptionText
                                    ]}>
                                        {item.label}
                                    </Text>
                                    {item.value === value && (
                                        <Ionicons name="checkmark" size={20} color={Colors.primary} />
                                    )}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 12,
        color: Colors.gray600,
        marginBottom: 8,
    },
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.gray50,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: Colors.gray100,
    },
    dropdownText: {
        fontSize: 14,
        color: Colors.gray900,
    },
    placeholder: {
        color: Colors.gray400,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: '70%',
        paddingBottom: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray100,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.gray900,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray50,
    },
    selectedOption: {
        backgroundColor: Colors.primary + '10',
    },
    optionText: {
        fontSize: 16,
        color: Colors.gray900,
    },
    selectedOptionText: {
        color: Colors.primary,
        fontWeight: '600',
    },
});
