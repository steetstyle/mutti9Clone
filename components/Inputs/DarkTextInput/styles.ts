import { StyleSheet, Dimensions } from "react-native";
import { GENERAL_SVG_PADDING } from "../../../contants/theme";

export const styles = StyleSheet.create({
	label: {
		fontWeight: '700',
		fontSize: 10,
		lineHeight: 20,
		color: '#FFF',
		marginBottom: 8
	},

	textInputContainer: {
		width: Dimensions.get('window').width - GENERAL_SVG_PADDING,
		overflow: 'hidden',
		height: 50
	},

	textInput: {
		display: 'flex',
		flex: 1,

		width: '100%',
		height: '100%',

		borderRadius: 10,
		backgroundColor: '#FFF',

		fontSize: 20,
		lineHeight: 20,
		fontWeight: '500',
		paddingHorizontal: 10,
		paddingVertical: 15,
	}
})