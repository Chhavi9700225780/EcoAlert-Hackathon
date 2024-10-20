export interface User {
    id: string;
    name: string;
    email: string;
    points: number;
  }
  
  export interface Report {
    id: number;
    category: string;
    description: string;
    location: string;
    latitude: number;
    longitude: number;
    date: string;
    status: 'Active' | 'Resolved' | 'Under Review';
  }
  
  export interface Resource {
    id: number;
    type: 'article' | 'video' | 'link';
    title: string;
    description: string;
    url: string;
  }