import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import SearchBar from '../../components/SearchBar';
import FilterButton from '../../components/FilterButton';
import TabButton from '../../components/TabButton';
import CarCard from '../../components/CarCard';
import FloatingActionButton from '../../components/FloatingActionButton';
import { mockCars } from '../../data/mockCars';

export default function VoitureScreen() {
    const [activeTab, setActiveTab] = useState<'all' | 'mine'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.gray50} />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.searchRow}>
                    <View style={styles.searchContainer}>
                        <SearchBar
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            placeholder="Rechercher une voiture"
                        />
                    </View>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="notifications-outline" size={24} color={Colors.gray700} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="menu-outline" size={24} color={Colors.gray700} />
                        </TouchableOpacity>
                    </View>
                    <FilterButton onPress={() => console.log('Filter pressed')} />
                </View>


            </View>

            {/* Tab Switcher */}
            <View style={styles.tabContainer}>
                <TabButton
                    title="Tous les voitures"
                    active={activeTab === 'all'}
                    onPress={() => setActiveTab('all')}
                />
                <TabButton
                    title="Mes voitures"
                    active={activeTab === 'mine'}
                    onPress={() => setActiveTab('mine')}
                />
            </View>

            {/* Car List */}
            <FlatList
                data={mockCars}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CarCard
                        car={item}
                        onPress={() => console.log('Car pressed:', item.model)}
                    />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

            {/* Floating Action Button */}
            <FloatingActionButton onPress={() => console.log('Add car pressed')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray50,
    },
    header: {
        paddingHorizontal: 16,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 12,
        backgroundColor: Colors.gray50,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12,
    },
    searchContainer: {
        flex: 1,
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.gray200,
    },
    tabContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 12,
        backgroundColor: Colors.gray50,
    },
    listContent: {
        paddingBottom: 100,
    },
});
