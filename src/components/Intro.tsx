import * as React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useScroll, animated } from '@react-spring/web';

import logo from '../assets/olivesforjules_logonotitle.svg';

const Intro: React.FC = (): JSX.Element => {
	const containerRef = React.useRef<HTMLDivElement>(null!);
	const { scrollYProgress } = useScroll({
		container: containerRef,
		default: {
			immediate: true,
		},
	});
	const flex = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};
	return (
		<div className="w-full h-screen-ios h-screen inset-0 bg-secondary">
			<Parallax pages={3}>
				<ParallaxLayer offset={0} sticky={{ start: 0, end: 2 }} style={flex}>
					<span className="w-80 sm:w-1/2 border-none rounded-full aspect-square bg-primary transition-transform hover:animate-ping"></span>
				</ParallaxLayer>
				<ParallaxLayer
					offset={1}
					speed={1.5}
					sticky={{ start: 1, end: 2 }}
					style={flex}
				>
					<img
						className="w-80 sm:w-[47%] aspect-square transition-opacity animate-pulse"
						src={logo}
						alt="face"
					/>
				</ParallaxLayer>
				<ParallaxLayer offset={2} style={flex}>
					<div
						ref={containerRef}
						className="w-[3000px] h-screen overflow-hidden absolute bg-transparent flex justify-center items-center"
					>
						<animated.span
							style={{
								clipPath: scrollYProgress.to((val) => `circle(${val * 200}%)`),
							}}
							className="w-full border-none rounded-full aspect-square bg-primary"
						></animated.span>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};

export default Intro;
