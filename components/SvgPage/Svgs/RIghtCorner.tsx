import Svg, { Path } from 'react-native-svg';

interface RightCornerProps {
	style: any;
}
export const RightCorner = ({ style }: RightCornerProps) => {

	return (
		<Svg style={[style, { marginTop: -1 }]} width={121} height={86} viewBox="0 0 121 86" fill="none">
			<Path d="M121 86C121 17.8164 65.5 0 0 0H121V86Z" fill="#0E003E"/>
		</Svg>
	)
}