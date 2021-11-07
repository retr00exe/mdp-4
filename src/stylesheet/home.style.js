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
		width: 100,
	},
	headerTXT: {
		color: '#fff',
		fontWeight: 'bold',
	},
	flatlist: {
		flex: 1,
		marginHorizontal: 10,
	},
	itemListContainerGanjil: {
		height: 100,
		backgroundColor: '#4DDBC4',
		marginVertical: 5,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	itemListContainerGenap: {
		height: 100,
		backgroundColor: '#71E2D0',
		marginVertical: 5,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	itemListContent: {
		marginLeft: 10,
	},
	itemListGarisGanjil: {
		backgroundColor: '#4DC4FF',
		width: 5,
		height: '80%',
	},
	itemListGarisGenap: {
		backgroundColor: '#7EA9FF',
		width: 5,
		height: '80%',
	},
	itemListTXT: {
		color: '#fff',
		marginVertical: 2,
		fontWeight: 'bold',
		fontSize: 17,
	},
});
