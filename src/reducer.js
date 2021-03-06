export const initialState = {
	user: null,
	playing: false,
	playlists: [],
	item: null,
	token: null,
}

const reducer = (state, action) => {
	switch(action.type){
		case 'SET_USER':
			return {
				...state,
				user:action.user
			}
		case 'SET_TOKEN':
			return{
				...state,
				token: action.token
			}
		case 'SET_PLAYLISTS':
			return{
				...state,
				playlists : action.playlists
			}
		case "GET_WEEKLY_DISCOVERIES":
			return {
				...state,
				weekly_dicoveries: action.weekly_dicoveries
			}
		default:
			return state
	}
}
export default reducer
