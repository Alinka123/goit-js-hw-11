import Axios from 'axios';

const axios = Axios.create({
baseURL: 'https://pixabay.com/api/',
  params: {
key: '50467285-01ba3d908a621ec7bfe384c55',
image_type: 'photo',
orientation: 'horizontal',
safesearch :true,
    }
})


export function getImagesByQuery(query) {
    return axios
        .get('', {
            params: {
                q: query,
            },
        })
        .then(res => res.data);
}
