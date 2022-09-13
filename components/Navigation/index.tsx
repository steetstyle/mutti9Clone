import { Dimensions, Text, View } from "react-native"
import { styles } from "./styles"
import { SvgButton } from "./SvgButton"
import { BarSVG } from "./Svgs/BarSvg"
import { HomeSVG } from "./Svgs/Home"
import { PlusSVG } from "./Svgs/Plus"
import { SlidersSVG } from "./Svgs/Sliders"
import { StacksSVG } from "./Svgs/Stacks"
import { UserSVG } from "./Svgs/User"


export const Navigation = () => {

	return (
		<View style={styles.navigationContainer}>
			<Text>selam</Text>
			<View style={styles.navigationBar}>
				<BarSVG style={styles.navigation}>
					<View style={styles.navigation}>
						<View style={styles.leftContainer}>
							<SvgButton onPress={() => {}} svg={<HomeSVG />} />
							<SvgButton onPress={() => {}} svg={<UserSVG />} />
						</View>
						<View style={styles.middleContainer}>
							<SvgButton onPress={() => {}} style={{ width: Dimensions.get('window').width * 0.20, height: 60, marginBottom: 20 }} svg={<PlusSVG />} />
						</View>
						<View style={styles.rightContainer}>
							<SvgButton onPress={() => {}} svg={<StacksSVG />} />
							<SvgButton onPress={() => {}} svg={<SlidersSVG />} />
						</View>
					</View>
				</BarSVG>

			</View>
		</View>
	)
}
