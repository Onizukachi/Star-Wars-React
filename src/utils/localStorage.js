export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data)
    }   

    return {}
}

export const setLocalStorage = (key, data) => {
    return localStorage.setItem(key, JSON.stringify(data))
}
