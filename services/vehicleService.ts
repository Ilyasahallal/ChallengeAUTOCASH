import { Car } from '../types/car';
import { API_CONFIG, handleApiResponse, handleApiError } from './api.config';

// Vehicle Service for API calls
export const vehicleService = {
    // Get all vehicles
    async getAllVehicles(): Promise<Car[]> {
        try {
            const response = await fetch(API_CONFIG.VEHICLES_ENDPOINT, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleApiResponse<any[]>(response);

            // Map backend response to frontend Car type
            return data.map(vehicle => ({
                id: vehicle.id || vehicle._id,
                reference: vehicle.reference,
                model: vehicle.model,
                image: vehicle.image || 'https://via.placeholder.com/300x200',
                garage: vehicle.garage || vehicle.nomVendeur,
                location: vehicle.ville,
                daysPosted: vehicle.daysPosted || this.calculateDaysPosted(vehicle.createdAt),
                status: vehicle.status === 'Publiée' ? 'Publiée' : 'Expertise',
                price: vehicle.prix,
            }));
        } catch (error) {
            console.error('Error fetching vehicles:', error);
            throw new Error(handleApiError(error));
        }
    },

    // Get vehicle by ID
    async getVehicleById(id: string): Promise<Car> {
        try {
            const response = await fetch(`${API_CONFIG.VEHICLES_ENDPOINT}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const vehicle = await handleApiResponse<any>(response);

            return {
                id: vehicle.id || vehicle._id,
                reference: vehicle.reference,
                model: vehicle.model,
                image: vehicle.image || 'https://via.placeholder.com/300x200',
                garage: vehicle.garage || vehicle.nomVendeur,
                location: vehicle.ville,
                daysPosted: vehicle.daysPosted || this.calculateDaysPosted(vehicle.createdAt),
                status: vehicle.status === 'Publiée' ? 'published' : 'expertise',
                price: vehicle.prix,
            };
        } catch (error) {
            console.error('Error fetching vehicle:', error);
            throw new Error(handleApiError(error));
        }
    },

    // Create new vehicle
    async createVehicle(vehicleData: any): Promise<Car> {
        try {
            const response = await fetch(API_CONFIG.VEHICLES_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: vehicleData.modele,
                    marque: vehicleData.marque,
                    prix: parseFloat(vehicleData.prix.replace(/\s/g, '')),
                    ville: vehicleData.ville,
                    adresse: vehicleData.adresse,
                    kilometrage: parseInt(vehicleData.kilometrage.replace(/\s/g, '')),
                    premiereCirculation: vehicleData.premiereCirculation,
                    miseEnCirculation: vehicleData.miseEnCirculation,
                    carburant: vehicleData.carburant,
                    status: 'Publiée',
                    typeVendeur: vehicleData.typeVendeur,
                    nomVendeur: vehicleData.nomVendeur,
                    objectifs: vehicleData.objectifs,
                    telVendeur: vehicleData.tel,
                    emailVendeur: vehicleData.email,
                    image: vehicleData.image || 'https://via.placeholder.com/300x200',
                }),
            });

            const vehicle = await handleApiResponse<any>(response);

            return {
                id: vehicle.id || vehicle._id,
                reference: vehicle.reference,
                model: vehicle.model,
                image: vehicle.image || 'https://via.placeholder.com/300x200',
                garage: vehicle.garage || vehicle.nomVendeur,
                location: vehicle.ville,
                daysPosted: 0,
                status: 'published',
                price: vehicle.prix,
            };
        } catch (error) {
            console.error('Error creating vehicle:', error);
            throw new Error(handleApiError(error));
        }
    },

    // Update vehicle
    async updateVehicle(id: string, vehicleData: any): Promise<Car> {
        try {
            const response = await fetch(`${API_CONFIG.VEHICLES_ENDPOINT}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vehicleData),
            });

            const vehicle = await handleApiResponse<any>(response);

            return {
                id: vehicle.id || vehicle._id,
                reference: vehicle.reference,
                model: vehicle.model,
                image: vehicle.image || 'https://via.placeholder.com/300x200',
                garage: vehicle.garage || vehicle.nomVendeur,
                location: vehicle.ville,
                daysPosted: vehicle.daysPosted || this.calculateDaysPosted(vehicle.createdAt),
                status: vehicle.status === 'Publiée' ? 'published' : 'expertise',
                price: vehicle.prix,
            };
        } catch (error) {
            console.error('Error updating vehicle:', error);
            throw new Error(handleApiError(error));
        }
    },

    // Delete vehicle
    async deleteVehicle(id: string): Promise<void> {
        try {
            const response = await fetch(`${API_CONFIG.VEHICLES_ENDPOINT}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            throw new Error(handleApiError(error));
        }
    },

    // Search vehicles
    async searchVehicles(query: string): Promise<Car[]> {
        try {
            const response = await fetch(`${API_CONFIG.VEHICLES_ENDPOINT}/search?q=${encodeURIComponent(query)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleApiResponse<any[]>(response);

            return data.map(vehicle => ({
                id: vehicle.id || vehicle._id,
                reference: vehicle.reference,
                model: vehicle.model,
                image: vehicle.image || 'https://via.placeholder.com/300x200',
                garage: vehicle.garage || vehicle.nomVendeur,
                location: vehicle.ville,
                daysPosted: vehicle.daysPosted || this.calculateDaysPosted(vehicle.createdAt),
                status: vehicle.status === 'Publiée' ? 'published' : 'expertise',
                price: vehicle.prix,
            }));
        } catch (error) {
            console.error('Error searching vehicles:', error);
            throw new Error(handleApiError(error));
        }
    },

    // Filter by status
    async filterByStatus(status: string): Promise<Car[]> {
        try {
            const backendStatus = status === 'published' ? 'Publiée' : 'Expertise';
            const response = await fetch(`${API_CONFIG.VEHICLES_ENDPOINT}/status/${backendStatus}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleApiResponse<any[]>(response);

            return data.map(vehicle => ({
                id: vehicle.id || vehicle._id,
                reference: vehicle.reference,
                model: vehicle.model,
                image: vehicle.image || 'https://via.placeholder.com/300x200',
                garage: vehicle.garage || vehicle.nomVendeur,
                location: vehicle.ville,
                daysPosted: vehicle.daysPosted || this.calculateDaysPosted(vehicle.createdAt),
                status: vehicle.status === 'Publiée' ? 'published' : 'expertise',
                price: vehicle.prix,
            }));
        } catch (error) {
            console.error('Error filtering vehicles:', error);
            throw new Error(handleApiError(error));
        }
    },

    // Get reference data (brands, cities, etc.)
    async getReferenceData(): Promise<any> {
        try {
            const response = await fetch(API_CONFIG.REFERENCE_DATA_ENDPOINT, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleApiResponse<any[]>(response);

            // Transform array to object map for easier usage
            const result: any = {};
            data.forEach(item => {
                result[item.type] = item;
            });

            return result;
        } catch (error) {
            console.error('Error fetching reference data:', error);
            throw new Error(handleApiError(error));
        }
    },

    // Helper to calculate days posted
    calculateDaysPosted(createdAt: string): number {
        if (!createdAt) return 0;
        const created = new Date(createdAt);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - created.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    },
};
