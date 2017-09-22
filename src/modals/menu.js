import mirror, {actions} from 'tinper-mirrorx';

mirror.model({
    name: 'menu',
    initialState: {
        toggle: false,
        current: 1
    },
    reducers: {
        changeCurrentMenu(state, menuKey) {
            return {
                ...state,
                current: menuKey
            }
        },
        handleToggle(state) {
            return {
                ...state,
                toggle: !state.toggle
            }
        }
    },
});
