import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';

export default function AddVehicleScreen() {
    const router = useRouter();

    // Form state
    const [prix, setPrix] = useState('330 000');
    const [typeVendeur, setTypeVendeur] = useState('Professionnel');
    const [nomVendeur, setNomVendeur] = useState('');
    const [objectifs, setObjectifs] = useState('');
    const [tel, setTel] = useState('+212 5849 39 48');
    const [email, setEmail] = useState('contact@autoclic.ma');
    const [ville, setVille] = useState('Casablanca');
    const [adresse, setAdresse] = useState('BD 2e Mars N°1');
    const [marque, setMarque] = useState('Audi');
    const [modele, setModele] = useState('A5');
    const [premiereCirculation, setPremiereCirculation] = useState('2022');
    const [miseEnCirculation, setMiseEnCirculation] = useState('DK');
    const [kilometrage, setKilometrage] = useState('100 000');
    const [carburant, setCarburant] = useState('Casablanca');

    const handleSubmit = () => {
        console.log('Form submitted');
        // Handle form submission
        router.back();
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
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Type vendeur</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>{typeVendeur}</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.gray600} />
                    </TouchableOpacity>
                </View>

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
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Ville</Text>
                    <TextInput
                        style={styles.input}
                        value={ville}
                        onChangeText={setVille}
                        placeholderTextColor={Colors.gray400}
                    />
                </View>

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
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Marque</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>{marque}</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.gray600} />
                    </TouchableOpacity>
                </View>

                {/* Modèle */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Modèle</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>{modele}</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.gray600} />
                    </TouchableOpacity>
                </View>

                {/* 1ère mise en circulation */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>1ère mise en circulation</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>{premiereCirculation}</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.gray600} />
                    </TouchableOpacity>
                </View>

                {/* Mise en circulation */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Mise en circulation</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>{miseEnCirculation}</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.gray600} />
                    </TouchableOpacity>
                </View>

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

                {/* Ville (Carburant) */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Ville</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>{carburant}</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.gray600} />
                    </TouchableOpacity>
                </View>

                {/* Photo voiture */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Photo voiture</Text>
                    <TouchableOpacity style={styles.uploadButton}>
                        <Ionicons name="cloud-upload-outline" size={20} color={Colors.primary} />
                        <Text style={styles.uploadText}>Charger une photo</Text>
                    </TouchableOpacity>
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Continuer</Text>
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
    submitButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.white,
    },
    bottomSpacing: {
        height: 40,
    },
});
