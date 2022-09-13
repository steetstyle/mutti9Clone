import { View } from "react-native"
import { RightCorner } from "./Svgs/RIghtCorner"
import { styles } from "./styles";
import { BackgroundSvg } from "./Svgs/BackgroundSvg";


interface SvgPageProps {
	topSide?: React.ReactNode;
	topSideContainerStyle?: any;

	bottomSide?: React.ReactNode;
	bottomSideContainerStyle?: any;

	SVG?: any;

	backgroundSvgStyle?: {
		top?: number;
		bottom?: number;
		right?: number;
		left?: number;
	}
}
export const SvgPage = ({ topSide, topSideContainerStyle, bottomSide, bottomSideContainerStyle, backgroundSvgStyle, SVG }: SvgPageProps) => {

	return (
		<View style={styles.container}>
			{SVG && <SVG style={[styles.backgroundSvgContainer, backgroundSvgStyle]} {...backgroundSvgStyle} />}
			{! SVG && <BackgroundSvg style={[styles.backgroundSvgContainer, backgroundSvgStyle]} {...backgroundSvgStyle} />}

			{
				topSide &&
				<View style={[styles.topSideContainer, topSideContainerStyle ]}>
					{topSide}
				</View>
			}

			{
				bottomSide &&
				<View style={[styles.bottomSideContainer, bottomSideContainerStyle ]}>
					<RightCorner style={styles.rightCorner}/>
					{bottomSide}
				</View>
			}
		</View>
	)
}