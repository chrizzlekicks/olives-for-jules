import Button from '../components/Button';

const Order: React.FC = (): JSX.Element => {
	return (
		<form className="my-4 container grid grid-rows-3 place-items-center gap-3 mx-auto max-w-screen-lg">
			<input
				className="block container rounded-full border border-solid border-gray-400 py-3 px-4"
				placeholder="Gib deine Email-Adresse an."
			/>
			<div className="grid grid-cols-3 gap-2 container">
				<select className="block container rounded-full bg-white border border-solid border-gray-400 py-3 px-4">
					<option>XS</option>
					<option>S</option>
					<option>M</option>
					<option>L</option>
					<option>XL</option>
				</select>
				<select className="block container rounded-full bg-white border border-solid border-gray-400 py-3 px-4">
					<option>Frau</option>
					<option>Mann</option>
				</select>
				<select className="block container rounded-full bg-white border border-solid border-gray-400 py-3 px-4">
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</select>
			</div>
			<Button>Bestellen</Button>
		</form>
	);
};

export default Order;
