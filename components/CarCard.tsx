import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Car } from '../types/car';
import { Colors } from '../constants/Colors';

interface CarCardProps {
    car: Car;
    onPress?: () => void;
}

export default function CarCard({ car, onPress }: CarCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
            <View style={styles.container}>
                {/* Car Image */}
                <Image source={{ uri: car.image }} style={styles.image} />

                {/* Car Details */}
                <View style={styles.details}>
                    {/* Reference and Model */}
                    <View style={styles.header}>
                        <Text style={styles.reference}>{car.reference}</Text>
                        <View style={styles.priceTag}>
                            <Text style={styles.price}>{car.price}</Text>
                        </View>
                    </View>

                    <Text style={styles.model}>{car.model}</Text>

                    {/* Garage Info */}
                    <View style={styles.infoRow}>
                        <Ionicons name="business-outline" size={16} color={Colors.primary} />
                        <Text style={styles.infoText}>{car.garage}</Text>
                        <Ionicons name="person-outline" size={16} color={Colors.gray500} style={styles.iconSpacing} />
                        <Text style={styles.infoText}>{car.location}</Text>
                    </View>

                    {/* Footer with badges */}
                    <View style={styles.footer}>
                        <View style={styles.daysBadge}>
                            <Ionicons name="calendar-outline" size={14} color={Colors.primary} />
                            <Text style={styles.daysText}>Depuis {car.daysPosted}J</Text>
                        </View>

                        <View style={[
                            styles.statusBadge,
                            car.status === 'Publiée' ? styles.publishedBadge : styles.expertiseBadge
                        ]}>
                            <Text style={[
                                styles.statusText,
                                car.status === 'Publiée' ? styles.publishedText : styles.expertiseText
                            ]}>
                                {car.status}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    container: {
        flexDirection: 'row',
        padding: 12,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: Colors.gray200,
    },
    details: {
        flex: 1,
        marginLeft: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    reference: {
        fontSize: 12,
        color: Colors.primary,
        fontWeight: '500',
    },
    priceTag: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    price: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: '600',
    },
    model: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.gray900,
        marginBottom: 6,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 12,
        color: Colors.gray600,
        marginLeft: 4,
    },
    iconSpacing: {
        marginLeft: 8,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    daysBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.gray100,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        gap: 4,
    },
    daysText: {
        fontSize: 11,
        color: Colors.gray700,
        fontWeight: '500',
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        borderWidth: 1,
    },
    publishedBadge: {
        backgroundColor: Colors.success + '15',
        borderColor: Colors.success,
    },
    expertiseBadge: {
        backgroundColor: Colors.purple + '15',
        borderColor: Colors.purple,
    },
    statusText: {
        fontSize: 11,
        fontWeight: '600',
    },
    publishedText: {
        color: Colors.success,
    },
    expertiseText: {
        color: Colors.purple,
    },
});
