import Svg, { Path } from 'react-native-svg';
import { BackgroundSvgProps } from '../../SvgPage/Svgs/BackgroundSvg';

export const SlidersSVG = ({ style }: BackgroundSvgProps) => {

	return (
		<Svg style={[style]} width={32} height={29} viewBox="0 0 32 29" fill="none">
			<Path d="M26.0529 19.3333L24.6029 26.5833H4.39833L2.94833 19.3333H26.0529ZM29 16.9167H0L2.41667 29H26.5833L29 16.9167ZM24.8385 2.41546L25.369 0H3.62621L4.15667 2.41546H24.8385ZM26.8927 7.25L27.3398 4.83333H1.65542L2.1025 7.25H26.8927ZM3.05104 14.5L2.74292 12.0833H26.245L25.9284 14.5H28.3656L29 9.66667H0L0.615042 14.5H3.05104Z" fill="white"/>
		</Svg>
	)
}