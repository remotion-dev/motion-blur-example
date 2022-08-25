import React from 'react';
import {AbsoluteFill, Freeze, useCurrentFrame} from 'remotion';

export const MotionBlur: React.FC<{
	children: React.ReactNode;
	iterations: number;
	frameDelay: number;
	opacity: number;
}> = ({children, iterations, frameDelay, opacity}) => {
	const frame = useCurrentFrame();
	return (
		<>
			{new Array(iterations).fill(true).map((_, i) => {
				return (
					<AbsoluteFill
						style={{opacity: opacity - ((i + 1) / iterations) * opacity}}
					>
						<Freeze frame={frame - frameDelay * i}>{children}</Freeze>
					</AbsoluteFill>
				);
			})}
			{children}
		</>
	);
};
