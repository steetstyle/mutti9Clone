import { SvgPage } from "../../components/SvgPage"
import { GENERAL_SVG_PADDING } from "../../contants/theme"
import { BottomSide } from "./BottomSide"
import { Background } from "./Svgs/Background"
import { TopSide } from "./TopSide"

export const Welcome = () => {

	return (
			<SvgPage
				backgroundSvgStyle={{
					bottom: 4,
					left: -32
				}}
				SVG={Background}

				topSide={<TopSide />}
				topSideContainerStyle={{
					display: 'flex',
					height: 600,
					paddingVertical: 90 - GENERAL_SVG_PADDING
				}}

				bottomSide={<BottomSide />}
				bottomSideContainerStyle={{
					display: 'flex',
					flex: 1
				}}
			/>
	)
}