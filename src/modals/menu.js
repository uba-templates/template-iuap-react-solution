import mirror, {actions} from 'tinper-mirrorx';

mirror.model({
    name: 'menu',
    initialState: 0,
    reducers: {
        increment(state) { return state + 1 },
        decrement(state) { return state - 1 }
    },
    effects: {
        async incrementAsync() {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            })
            actions.app.increment()
        }
    }
})