import React from 'react';
import {AbsoluteFill} from 'remotion';
import {MotionBlur} from './MotionBlur';
import {Square} from './SquareAnimation';

export const MyComposition = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<MotionBlur opacity={1} frameDelay={0.1} iterations={50}>
				<Square />
			</MotionBlur>
		</AbsoluteFill>
	);
};
