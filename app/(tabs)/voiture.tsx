import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, RefreshControl, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import SearchBar from '../../components/SearchBar';
import FilterButton from '../../components/FilterButton';
import TabButton from '../../components/TabButton';
import CarCard from '../../components/CarCard';
import FloatingActionButton from '../../components/FloatingActionButton';
import { Car } from '../../types/car';
import { vehicleService } from '../../services/vehicleService';

export default function VoitureScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'all' | 'mine'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [vehicles, setVehicles] = useState<Car[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch vehicles on mount
    useEffect(() => {
        fetchVehicles();
    }, []);

    // Fetch vehicles from API
    const fetchVehicles = async () => {
        try {
            setError(null);
            const data = await vehicleService.getAllVehicles();
            setVehicles(data);
        } catch (err: any) {
            setError(err.message);
            console.error('Error fetching vehicles:', err);
        } finally {
            setIsLoading(false);
            setIsRefreshing(false);
        }
    };

    // Handle refresh
    const onRefresh = () => {
        setIsRefreshing(true);
        fetchVehicles();
    };

    // Filter vehicles based on search and tab
    const filteredVehicles = vehicles.filter(car => {
        const matchesSearch = car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.reference.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTab = activeTab === 'all' || car.status === activeTab;
        return matchesSearch && matchesTab;
    });

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

            {/* Loading State */}
            {isLoading && (
                <View style={styles.centerContainer}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                    <Text style={styles.loadingText}>Chargement des véhicules...</Text>
                </View>
            )}

            {/* Error State */}
            {!isLoading && error && (
                <View style={styles.centerContainer}>
                    <Ionicons name="alert-circle-outline" size={64} color={Colors.gray400} />
                    <Text style={styles.errorText}>{error}</Text>
                    <TouchableOpacity style={styles.retryButton} onPress={fetchVehicles}>
                        <Text style={styles.retryButtonText}>Réessayer</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Empty State */}
            {!isLoading && !error && filteredVehicles.length === 0 && (
                <View style={styles.centerContainer}>
                    <Ionicons name="car-outline" size={64} color={Colors.gray400} />
                    <Text style={styles.emptyText}>Aucun véhicule trouvé</Text>
                </View>
            )}

            {/* Car List */}
            {!isLoading && !error && filteredVehicles.length > 0 && (
                <FlatList
                    data={filteredVehicles}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CarCard
                            car={item}
                            onPress={() => console.log('Car pressed:', item.model)}
                        />
                    )}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={onRefresh}
                            colors={[Colors.primary]}
                        />
                    }
                />
            )}

            {/* Floating Action Button */}
            <FloatingActionButton onPress={() => router.push('/add-vehicle')} />
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
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    loadingText: {
        marginTop: 16,
        fontSize: 16,
        color: Colors.gray600,
    },
    errorText: {
        marginTop: 16,
        fontSize: 16,
        color: Colors.gray600,
        textAlign: 'center',
    },
    emptyText: {
        marginTop: 16,
        fontSize: 16,
        color: Colors.gray600,
    },
    retryButton: {
        marginTop: 24,
        paddingHorizontal: 32,
        paddingVertical: 12,
        backgroundColor: Colors.primary,
        borderRadius: 8,
    },
    retryButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
});
