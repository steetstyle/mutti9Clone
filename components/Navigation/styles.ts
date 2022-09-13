import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
	navigationContainer: {
		backgroundColor: 'pink',
		paddingHorizontal: 8,
		paddingBottom: 22
	},

	navigationBar: {
		width: Dimensions.get('window').width,
		height: 70,
		display: 'flex',
		flexDirection: 'row',
	},

	navigation: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
	},

	leftContainer: {
		flexDirection: 'row',
		width: '35%',
		justifyContent: 'space-around',
		paddingLeft: 15
	},

	middleContainer: {
		width: '30%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},

	rightContainer: {
		flexDirection: 'row',
		width: '35%',
		justifyContent: 'space-around',
		paddingRight: 15
	}
})