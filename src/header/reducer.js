import { 
    ACTIVATE_MENU_ITEM
 } from './actionTypes'

const initialState = {
    menuItems: [
		{ 
			name: "Home",
			path: "/",
		},	
		{ 
			name: "Projects",
			path: "projects",
		},
		{ 
			name: "About",
			path: "about",
		}
	],
	activeItem: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_MENU_ITEM:
            return Object.assign({}, state, {
				activeItem: action.activeItem
            })
        
        default:
            return state;
    }
}
