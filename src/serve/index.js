import ajax from 'utils/ajax';

const serveUrl = {
    userData: '/userInfo'
}

export function getUserData(param) {
    return ajax.get(`${serveUrl.userData}/${param}`)
}