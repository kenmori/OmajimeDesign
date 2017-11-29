
export const request = (number) => {
    axios.post('http://localhost:3000/comments', {
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => {
        response.data
}
return {
    type: 'USER_FETCH_REQUESTED',
    payload: {userId: number}
    }
)
.catch(err => {
    throw err;
});