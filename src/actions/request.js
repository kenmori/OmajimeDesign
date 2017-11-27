export const request = (number) => {
    return {
        type: 'USER_FETCH_REQUESTED',
        payload: {userId: number}
    }
}