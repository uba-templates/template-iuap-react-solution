import { Message } from 'tinper-bee';

export function err(msg) {
    return Message.create({
        content: msg,
        color: 'danger',
        duration: null,
        position: 'topRight'
    })

}

export function warn(msg) {
    return Message.create({
        content: msg,
        color: 'warning',
        duration: 4.5,
        position: 'topRight'
    })

}

export function info(msg) {
    return Message.create({
        content: msg,
        color: 'info',
        duration: 3,
        position: 'topRight'
    })

}

export function success(msg) {
    return Message.create({
        content: msg,
        color: 'success',
        duration: 1.5,
        position: 'topRight'
    })
}