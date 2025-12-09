// API Configuration for Physical Device (Expo Go)
// For Android Emulator: 10.0.2.2 is the special alias to localhost
// For iOS Simulator: use localhost
// For Physical Device: use your computer's local IP address (192.168.43.114)

const API_BASE_URL = 'http://192.168.43.114:8080/api';

export const API_CONFIG = {
    BASE_URL: API_BASE_URL,
    VEHICLES_ENDPOINT: `${API_BASE_URL}/vehicles`,
    REFERENCE_DATA_ENDPOINT: `${API_BASE_URL}/reference-data`,
    TIMEOUT: 10000, // 10 seconds
};

// Helper function to handle API responses
export async function handleApiResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || `HTTP error! status: ${response.status}`);
    }

    // Handle 204 No Content
    if (response.status === 204) {
        return [] as T;
    }

    return response.json();
}

// Helper function to handle API errors
export function handleApiError(error: any): string {
    if (error.message === 'Network request failed') {
        return 'Impossible de se connecter au serveur. Vérifiez votre connexion.';
    }

    if (error.message.includes('timeout')) {
        return 'La requête a pris trop de temps. Réessayez.';
    }

    return error.message || 'Une erreur est survenue';
}
