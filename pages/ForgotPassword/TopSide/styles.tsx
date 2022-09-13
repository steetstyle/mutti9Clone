import { StyleSheet } from "react-native";
import { GENERAL_SVG_PADDING } from "../../../contants/theme";

export const styles = StyleSheet.create({
	topSideContainer: {
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: GENERAL_SVG_PADDING,
		flex: 1
	},

	mailText: {
		fontSize: 20,
		lineHeight: 25,
		fontWeight: '700',
		textAlign: 'center'
	},

	informationText: {
		fontSize: 20,
		lineHeight: 25,
		fontWeight: '400',
		textAlign: 'center'
	}
})