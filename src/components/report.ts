// types.ts
export interface Report {
    id: string;
    type: string; // e.g., "Pollution", "Deforestation"
    description: string;
    location: {
      latitude: number;
      longitude: number;
    };
    status: 'Active' | 'Resolved' | 'Under Review';
    date: string; // ISO date string
  }
  

