import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { vehicleService } from '../services/vehicleService';
import Dropdown from '../components/Dropdown';
import { VEHICLE_OPTIONS } from '../constants/VehicleOptions';

export default function AddVehicleScreen() {
    const router = useRouter();

    // Reference Data State
    const [referenceData, setReferenceData] = useState<any>(null);
    const [isLoadingData, setIsLoadingData] = useState(true);

    // Form state
    const [prix, setPrix] = useState('');
    const [typeVendeur, setTypeVendeur] = useState('Professionnel');
    const [nomVendeur, setNomVendeur] = useState('');
    const [objectifs, setObjectifs] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [ville, setVille] = useState('');
    const [adresse, setAdresse] = useState('');
    const [marque, setMarque] = useState('Audi');
    const [modele, setModele] = useState('A5');
    const [premiereCirculation, setPremiereCirculation] = useState('2024');
    const [miseEnCirculation, setMiseEnCirculation] = useState('MA');
    const [kilometrage, setKilometrage] = useState('');
    const [carburant, setCarburant] = useState('Diesel');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        loadReferenceData();
    }, []);

    const loadReferenceData = async () => {
        try {
            const data = await vehicleService.getReferenceData();
            setReferenceData(data);

            // Set default values if data exists
            if (data?.marques?.values?.length > 0) setMarque(data.marques.values[0]);
            if (data?.villes?.values?.length > 0) setVille(data.villes.values[0]);
            if (data?.carburants?.values?.length > 0) setCarburant(data.carburants.values[0]);

        } catch (error) {
            console.error('Error loading reference data:', error);
            Alert.alert('Erreur', 'Impossible de charger les données de référence.');
        } finally {
            setIsLoadingData(false);
        }
    };

    // Helper to get dropdown options from reference data
    const getOptions = (type: string, fallback: any[]) => {
        if (referenceData && referenceData[type] && referenceData[type].values) {
            return referenceData[type].values.map((v: string) => ({ label: v, value: v }));
        }
        return fallback;
    };

    // Helper for dependent options (Models based on Brand)
    const getModelOptions = () => {
        if (referenceData && referenceData.marques && referenceData.marques.dependentValues && referenceData.marques.dependentValues[marque]) {
            return referenceData.marques.dependentValues[marque].map((m: string) => ({ label: m, value: m }));
        }
        return VEHICLE_OPTIONS.modeles;
    };

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);

            // Create vehicle data
            const vehicleData = {
                prix,
                typeVendeur,
                nomVendeur,
                objectifs,
                tel,
                email,
                ville,
                adresse,
                marque,
                modele,
                premiereCirculation,
                miseEnCirculation,
                kilometrage,
                carburant,
            };

            // Submit to API
            await vehicleService.createVehicle(vehicleData);

            // Show success message
            Alert.alert(
                'Succès',
                'Le véhicule a été ajouté avec succès !',
                [
                    {
                        text: 'OK',
                        onPress: () => router.back(),
                    },
                ]
            );
        } catch (error: any) {
            Alert.alert(
                'Erreur',
                error.message || 'Une erreur est survenue lors de l\'ajout du véhicule',
                [{ text: 'OK' }]
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color={Colors.gray900} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ajouter une voiture</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="search-outline" size={20} color={Colors.gray700} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="ellipsis-vertical" size={20} color={Colors.gray700} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Prix */}
                <View style={styles.section}>
                    <Text style={styles.priceLabel}>Prix</Text>
                    <View style={styles.priceInputContainer}>
                        <TextInput
                            style={styles.priceInput}
                            value={prix}
                            onChangeText={setPrix}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.editIcon}>
                            <Ionicons name="pencil" size={16} color={Colors.gray600} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Informations du vendeur */}
                <View style={styles.sectionHeader}>
                    <Ionicons name="information-circle" size={20} color={Colors.primary} />
                    <Text style={styles.sectionTitle}>Informations du vendeur</Text>
                </View>

                {/* Type vendeur */}
                {isLoadingData ? (
                    <ActivityIndicator size="small" color={Colors.primary} style={styles.loader} />
                ) : (
                    <Dropdown
                        label="Type vendeur"
                        value={typeVendeur}
                        options={getOptions('typeVendeur', VEHICLE_OPTIONS.typeVendeur)}
                        onSelect={setTypeVendeur}
                    />
                )}

                {/* Nom du vendeur */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nom du vendeur</Text>
                    <TextInput
                        style={styles.input}
                        value={nomVendeur}
                        onChangeText={setNomVendeur}
                        placeholder="Entrez le nom"
                        placeholderTextColor={Colors.gray400}
                    />
                </View>

                {/* Objectifs */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Objectifs</Text>
                    <TextInput
                        style={styles.input}
                        value={objectifs}
                        onChangeText={setObjectifs}
                        placeholder="Entrez les objectifs"
                        placeholderTextColor={Colors.gray400}
                    />
                </View>

                {/* Tel */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Tel</Text>
                    <TextInput
                        style={styles.input}
                        value={tel}
                        onChangeText={setTel}
                        keyboardType="phone-pad"
                        placeholderTextColor={Colors.gray400}
                    />
                </View>

                {/* Email */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholderTextColor={Colors.gray400}
                    />
                </View>

                {/* Ville */}
                <Dropdown
                    label="Ville"
                    value={ville}
                    options={getOptions('villes', VEHICLE_OPTIONS.villes)}
                    onSelect={setVille}
                    placeholder="Sélectionner une ville"
                />

                {/* Adresse */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Adresse</Text>
                    <TextInput
                        style={styles.input}
                        value={adresse}
                        onChangeText={setAdresse}
                        placeholderTextColor={Colors.gray400}
                    />
                </View>

                {/* Informations de la voiture */}
                <View style={styles.sectionHeader}>
                    <Ionicons name="information-circle" size={20} color={Colors.primary} />
                    <Text style={styles.sectionTitle}>Informations de la voiture</Text>
                </View>

                {/* Marque */}
                <Dropdown
                    label="Marque"
                    value={marque}
                    options={getOptions('marques', VEHICLE_OPTIONS.marques)}
                    onSelect={(val) => {
                        setMarque(val);
                        // Reset model when brand changes
                        setModele('');
                    }}
                    placeholder="Sélectionner une marque"
                />

                {/* Modèle */}
                <Dropdown
                    label="Modèle"
                    value={modele}
                    options={getModelOptions()}
                    onSelect={setModele}
                    placeholder="Sélectionner un modèle"
                />

                {/* 1ère mise en circulation */}
                <Dropdown
                    label="1ère mise en circulation"
                    value={premiereCirculation}
                    options={VEHICLE_OPTIONS.annees} // Years are generated, keep as is
                    onSelect={setPremiereCirculation}
                />

                {/* Mise en circulation (Origine) */}
                <Dropdown
                    label="Origine / Dédouanement"
                    value={miseEnCirculation}
                    options={getOptions('origines', VEHICLE_OPTIONS.origines)}
                    onSelect={setMiseEnCirculation}
                />

                {/* Kilométrage */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Kilométrage</Text>
                    <View style={styles.priceInputContainer}>
                        <TextInput
                            style={styles.input}
                            value={kilometrage}
                            onChangeText={setKilometrage}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.editIconSmall}>
                            <Ionicons name="pencil" size={16} color={Colors.gray600} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Carburant */}
                <Dropdown
                    label="Carburant"
                    value={carburant}
                    options={getOptions('carburants', VEHICLE_OPTIONS.carburant)}
                    onSelect={setCarburant}
                    placeholder="Sélectionner le carburant"
                />

                {/* Photo voiture */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Photo voiture</Text>
                    <TouchableOpacity style={styles.uploadButton}>
                        <Ionicons name="cloud-upload-outline" size={20} color={Colors.primary} />
                        <Text style={styles.uploadText}>Charger une photo</Text>
                    </TouchableOpacity>
                </View>

                {/* Submit Button */}
                <TouchableOpacity
                    style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
                    onPress={handleSubmit}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <ActivityIndicator color={Colors.white} />
                    ) : (
                        <Text style={styles.submitButtonText}>Continuer</Text>
                    )}
                </TouchableOpacity>

                {/* Bottom spacing */}
                <View style={styles.bottomSpacing} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 35,
        paddingBottom: 16,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray100,
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.gray900,
        flex: 1,
        marginLeft: 12,
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 8,
    },
    iconButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: Colors.gray50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    section: {
        marginBottom: 24,
    },
    priceLabel: {
        fontSize: 12,
        color: Colors.gray600,
        marginBottom: 8,
    },
    priceInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.gray50,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    priceInput: {
        flex: 1,
        fontSize: 16,
        color: Colors.primary,
        fontWeight: '600',
    },
    editIcon: {
        padding: 4,
    },
    editIconSmall: {
        padding: 4,
        position: 'absolute',
        right: 12,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
        marginTop: 8,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.primary,
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 12,
        color: Colors.gray600,
        marginBottom: 8,
    },
    input: {
        backgroundColor: Colors.gray50,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 14,
        color: Colors.gray900,
        borderWidth: 1,
        borderColor: Colors.gray100,
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
    uploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: Colors.white,
        borderRadius: 8,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: Colors.primary,
        borderStyle: 'dashed',
    },
    uploadText: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: '500',
    },
    loader: {
        marginVertical: 10,
    },
    submitButton: {
        backgroundColor: Colors.primary,
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 24,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    submitButtonDisabled: {
        opacity: 0.7,
        backgroundColor: Colors.gray400,
        shadowOpacity: 0,
        elevation: 0,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.white,
    },
    bottomSpacing: {
        height: 40,
    },
});
