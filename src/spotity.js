const authEndPoint = 'https://accounts.spotify.com/authorize';
const clientId = '243a8f21c89a4cfbb2f19a76c14d23e1';
const redirectURI = 'http://localhost:3000/'
const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
]
export const getTokenFromURL = () => {
	return window.location.hash.substring(1).split('&').reduce( 
		(initial, item) => {
		var get_token = item.split('=')
		initial[get_token[0]] = decodeURIComponent(get_token[1])
		return initial
	}, {})
}
export const loginURL = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`