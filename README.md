# Motion blur example

Credits to @UmungoBungo for inventing this technique!

A demo showing how to achieve motion blur in Remotion.  
The technique renders the previous frame at a lower opacity multiple times to create a blur effect.

For this technique to work, the element must be wrapped in an [`<AbsoluteFill>`](https://remotion.dev/docs/absolute-fill) so the previous frames can be layered under the original.

Motion blur can be added to any element by wrapping it in `<MotionBlur>`:

```tsx
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
```

The `frameDelay` parameter determines how many frames each layer is lagging behind.

The `opacity` defines the highest opacity of a layer. The lowest opacity is 0.

The `iterations` parameter defines how many layers are added together.

The source for Motion blur is:

```tsx
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
```

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help [on our Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
