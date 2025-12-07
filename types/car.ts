export interface Car {
    id: string;
    reference: string;
    model: string;
    image: string;
    garage: string;
    location: string;
    daysPosted: number;
    status: 'Publiée' | 'Expertise';
    price: string;
}
