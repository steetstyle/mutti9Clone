import { View } from "react-native"
import { Button } from "../../../components/Button"

interface BottomSideProps {

}

export const BottomSide = ({}: BottomSideProps) => {

	return (
		<View style={{
			height: '100%',
			width: '100%',
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			paddingHorizontal: 34,
			paddingVertical: 34,
		}}>
		<Button
			buttonText="PROFİLİMİ TAMAMLA"
		/>
		</View>
	)
}