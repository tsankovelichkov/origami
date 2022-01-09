const api = "http://localhost:3000/posts"

export const getAll = () => {
    return fetch(api)
             .then(res=>res.json())
}

