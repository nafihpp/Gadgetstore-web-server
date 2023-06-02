export interface children {
    children: React.ReactNode
}
export interface Rating {
    count: number;
    rate: number
}
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating
}



