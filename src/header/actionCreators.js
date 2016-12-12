import { ACTIVATE_MENU_ITEM } from './actionTypes'

export function activateMenuItem(item) {
    return {
        type: ACTIVATE_MENU_ITEM,
		activeItem: item
    }
}

