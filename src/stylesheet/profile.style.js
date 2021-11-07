import { StyleSheet } from 'react-native';
export default StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		backgroundColor: '#45B0E5',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 15,
		alignItems: 'center',
		paddingBottom: 10,
	},
	headerImage: {
		height: 120,
		width: 120,
		borderRadius: 60,
		marginVertical: 10,
	},
	headerTXT: {
		fontWeight: 'bold',
		color: '#fff',
	},
	headerTXTDesc: {
		color: '#fff',
	},
	bodyTouchable: {
		alignSelf: 'center',
		backgroundColor: '#4DDBC4',
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 10,
		margin: 20,
	},
	bodyTXT: {
		color: '#efd',
		fontSize: 20,
	},
});
