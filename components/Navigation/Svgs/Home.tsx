import Svg, { Path } from 'react-native-svg';
import { BackgroundSvgProps } from '../../SvgPage/Svgs/BackgroundSvg';

export const HomeSVG = ({ style }: BackgroundSvgProps) => {

	return (
		<Svg style={[style]} width={30} height={30} viewBox="0 0 30 30" fill="none">
			<Path d="M1 27V12.0259C1 11.3778 1.31401 10.7699 1.84251 10.3948L13.6317 2.02832C14.316 1.54267 15.2307 1.53585 15.9222 2.01126L28.1331 10.4062C28.6758 10.7793 29 11.3957 29 12.0543V27C29 28.1046 28.1046 29 27 29H3C1.89543 29 1 28.1046 1 27Z" stroke="white" strokeWidth="2"/>
		</Svg>
	)
}