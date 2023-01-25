import chris from '../assets/chris.jpeg';
import franz from '../assets/franzmann.jpeg';
import rio from '../assets/rio.jpeg';

const Team: React.FC = (): JSX.Element => {
	return (
		<div className="my-4 p-2 lg:h-96 container flex flex-col lg:grid md:grid-cols-3 gap-4 mx-auto max-w-screen-lg">
			<span className="w-72 h-72 border rounded-full overflow-hidden">
				<img src={chris} />
			</span>
			<span className="w-72 h-72 top-20 border rounded-full overflow-hidden">
				<img src={franz} />
			</span>
			<span className="w-72 h-72 border rounded-full overflow-hidden">
				<img src={rio} />
			</span>
		</div>
	);
};

export default Team;
