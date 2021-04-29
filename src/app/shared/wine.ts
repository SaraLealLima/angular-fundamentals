import { Comment } from './comment';
export class Wine {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    country: string;
    description: string;
    comments?: Comment[]
}

