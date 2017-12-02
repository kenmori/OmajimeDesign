import axios from 'axios';
export const request = (data) => {
    axios.post(`http://localhost:3000/comments/`, {
        headers: {
            'Accept': 'application/json',
            data
        }
    }).then((response) => {
        response.data
}).catch(err => {
    throw err;
});
}