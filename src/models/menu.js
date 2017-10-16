import mirror, {actions} from 'mirrorx';

const menuModel = {
    name: 'menuModel',
    initialState: {
        toggle: false,
        current: 1,
        expanded: false
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
        },
        handleExtend(state) {
            return {
                ...state,
                expanded: !state.expanded
            }
        }

    }
};

export default menuModel;

