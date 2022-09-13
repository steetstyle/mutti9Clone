import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		zIndex: 2,
		width: '100%',
		height: '100%'
	},

	topSideContainer: {
		display: 'flex',

		zIndex: 3,
		backgroundColor: '#0E003E',
		borderBottomLeftRadius: 100
	},

	bottomSideContainer: {
		display: 'flex',
		zIndex: 2,
	},

	rightCorner: {
		position: 'absolute',
		top: 0,
		right: 0
	},

	backgroundSvgContainer: {
		position: 'absolute',
		opacity: 0.2,
	}
})