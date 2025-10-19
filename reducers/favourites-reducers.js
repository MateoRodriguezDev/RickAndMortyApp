export const initialState = {
    list: [],
    activeItem: ''
}

const createItem = (item) => {
    return item
}

export const favouritesReducer = (
    state = initialState,
    action
) => {

    if(action.type === 'add-item'){
        const newItem = createItem(action.payload.item)

        if(state.list.some(character => character.id === newItem.id)) return state;

        const newList = [...state.list, newItem]
        return {...state, list: newList}
    }

    if(action.type === 'delete-item'){
        return{
            ...state,
            list: state.list.filter(item => item.id !== action.payload.id)
        }
    }

    return state;
}