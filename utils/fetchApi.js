import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '2c94fdfb12msh251ba9647ea634dp156981jsn227cc101c964',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }

    });
    return data;
};