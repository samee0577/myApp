import axios from 'axios';
import { TMDB_ACCESS_TOKEN, BASE_URL, IMAGE_BASE_URL } from '../api';

export const fetchTrendingMovies = async (): Promise<any[]> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); // delibrate Delay for 2 seconds
    
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
      },
    });
    console.log('Trending movies fetched successfully:', response.data.results);
    return response.data.results;
  } catch (error: any) {
    console.log('Error fetching trending movies:', error.message);
    return [];
  }
};

export const getImageUrl = (path: string | null): string | null => 
  path ? `${IMAGE_BASE_URL}${path}` : null;
  

