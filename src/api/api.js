export const getFoods = () => {
    return fetch(
        '/api/foods', {
            headers: {
                'Content-Type': 'application/json'
            }
    }
    )
        .then(res => res.json())
};

export const getFoodKinds = () => {
    return fetch(
        '/api/foodKinds', {
            headers: {
                'Content-Type': 'application/json'
            }
    }
    )
        .then(res => res.json())
};

export const getFood = (foodKindId) => {
    return fetch(
        `/api/foods/${foodKindId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
    }
    )
        .then(res => res.json())
};

export const login = (phoneNumber, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ phoneNumber: phoneNumber, password: password })
    }).then(res => res.json())
};

export const signup = (username, password, phoneNumber) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password, phoneNumber: phoneNumber })
    }).then(res => res.json())
};

export const testDuplicate = (phoneNumber) => {
    return fetch('/api/users/phoneNumberVerify', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ phoneNumber: phoneNumber })
    }).then(res => res.json())
};

export const changePassword = (username, password) => {
    return fetch(`/api/users/${username}/changePassword`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ password: password })
    }).then(res => res.json())
};
