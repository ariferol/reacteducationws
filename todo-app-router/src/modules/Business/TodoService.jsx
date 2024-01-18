const getAll = async () => {
    const response = await fetch(process.env.SERVICE_ENDPOINT + "/todos");

    return await response.json();
};

const get = async (id) => {
    const response = await fetch(`${process.env.SERVICE_ENDPOINT}/todos/${id}`);
    return await response.json();
};

const post = async (todo) => {
    const response = await fetch(process.env.SERVICE_ENDPOINT + "/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    return await response.json();
};

const put = async (id, todo) => {
    const response = await fetch(`${process.env.SERVICE_ENDPOINT}/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    return await response.json();
};

const remove = async (id) => {
    const response = await fetch(`${process.env.SERVICE_ENDPOINT}/todos/${id}`, {
        method: "DELETE",
    });
    
    return await response.json();
};

export {
    getAll,
    get,
    post,
    put,
    remove,
}