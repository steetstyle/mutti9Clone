import { StyleSheet } from "react-native";
import { GENERAL_SVG_PADDING } from "../../../contants/theme";

export const styles = StyleSheet.create({
	topSideContainer: {
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: GENERAL_SVG_PADDING,
	},

	svgContainer: {
		padding: 66 + GENERAL_SVG_PADDING,
	},

	informationBoxContainer: {
		marginTop: -30 - GENERAL_SVG_PADDING,
		borderRadius: 20,
		backgroundColor: '#A1C6B6',
		paddingHorizontal: 17,
		paddingVertical: 16,
	},

	informationBoxText: {
		fontSize: 20,
		lineHeight: 25,
		fontWeight: '500',
		color: '#FFF',
		textAlign: 'center'
	}
})