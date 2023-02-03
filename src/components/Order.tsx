import * as React from 'react';
import Button from '../components/Button';
import emailjs from '@emailjs/browser';

const Order: React.FC = (): JSX.Element => {
	const formRef = React.useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();

		emailjs
			.sendForm(
				`${import.meta.env.PUBLIC_EMAILJS_SERVICEID}`,
				`${import.meta.env.PUBLIC_EMAILJS_TEMPLATEID}`,
				formRef.current as HTMLFormElement | string,
				`${import.meta.env.PUBLIC_EMAILJS_USERID}`
			)
			.then(
				(result) => {
					alert(`${result.text}, deine Bestellung wurde abgeschickt!`);
				},
				(error) => {
					alert(`${error.text}....`);
				}
			);
	};

	return (
		<form
			ref={formRef}
			className="my-4 container grid grid-rows-3 place-items-center gap-3 mx-auto max-w-screen-lg"
			onSubmit={sendEmail}
		>
			<input
				className="block container rounded-full border border-solid border-gray-400 py-3 px-4"
				placeholder="Gib deine Email-Adresse an."
				name="email"
			/>
			<div className="grid grid-cols-3 gap-2 container">
				<select
					className="block container rounded-full bg-white border border-solid border-gray-400 py-3 px-4"
					name="size"
				>
					<option>XS</option>
					<option>S</option>
					<option>M</option>
					<option>L</option>
					<option>XL</option>
				</select>
				<select
					className="block container rounded-full bg-white border border-solid border-gray-400 py-3 px-4"
					name="sex"
				>
					<option>Frau</option>
					<option>Mann</option>
				</select>
				<select
					className="block container rounded-full bg-white border border-solid border-gray-400 py-3 px-4"
					name="amount"
				>
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
