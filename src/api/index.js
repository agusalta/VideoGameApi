import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
    params: {
        tag: '3d.mmorpg.fantasy.pvp',
        platform: 'pc'
    },
    headers: {
        'X-RapidAPI-Key': '59d326df84msh63c5177a29fcfc8p16e4b6jsn6e68d682dc60',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

const fetchData = async () => {
    try {
        const response = await axios.request(options);

        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export default fetchData;