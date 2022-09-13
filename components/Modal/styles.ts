import { Dimensions, StyleSheet } from "react-native";
import { GENERAL_SVG_PADDING } from "../../contants/theme";

export const styles = StyleSheet.create({
	modalContainer: {
		minHeight: 200,
		width: Dimensions.get('screen').width - GENERAL_SVG_PADDING,
		borderRadius: 20,
		paddingHorizontal: 31,
		paddingVertical: 37,
		alignSelf: 'center',
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'space-around'
	},

	text: {
		fontSize: 20
	}
})