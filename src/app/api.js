import axios from 'axios';

export async function getAllMatchesApi() {
  return await axios.get('https://www.scorebat.com/video-api/v1/');
}