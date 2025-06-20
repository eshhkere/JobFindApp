export interface Vacancy {
  job_id: number;
  employer_id: number;
  title: string;
  category: string;
  description: string;
  salary: number;
  date: string;
  time_start: string;
  time_end: string;
  address: string;
  rating: number;
  is_urgent: boolean;
  status: 'open' | 'closed';
  created_at: string;
  
  isFavorite?: boolean;
  employerAvatar?: string;
}
