
export const createTime = (value) => {
    return [new Date(value).getFullYear(), new Date(value).getMonth()+1,
new Date(value).getDate(),
new Date(value).getHours(),
new Date(value).getMinutes()
    ]
}
