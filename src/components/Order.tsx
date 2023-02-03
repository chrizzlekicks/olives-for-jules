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
			className="my-8 container grid grid-rows-3 place-items-center gap-6 mx-auto max-w-screen-lg"
			onSubmit={sendEmail}
		>
			<input
				className="block container rounded-full bg-primary border-2 border-solid placeholder:text-ofj_s placeholder-shown:text-ofj_s sm:placeholder:text-ofj_l sm:placeholder-shown:text-ofj_l focus:bg-primary focus:text-ofj_s sm:focus:text-ofj_l enabled:bg-primary enabled:text-ofj_s sm:enabled:text-ofj_l border-border py-3 px-4"
				placeholder="Gib deine Email-Adresse an."
				name="email"
				type="email"
				required
			/>
			<div className="grid grid-cols-3 gap-4 container">
				<select
					className="block container rounded-full bg-primary border-2 border-solid border-border py-3 px-4 text-ofj_s sm:text-ofj_l"
					name="size"
				>
					<option>XS</option>
					<option>S</option>
					<option>M</option>
					<option>L</option>
					<option>XL</option>
				</select>
				<select
					className="block container rounded-full bg-primary border-2 border-solid border-border py-3 px-4 text-ofj_s sm:text-ofj_l"
					name="sex"
				>
					<option>Frau</option>
					<option>Mann</option>
				</select>
				<select
					className="block container rounded-full bg-primary border-2 border-solid border-border py-3 px-4 text-ofj_s sm:text-ofj_l"
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
