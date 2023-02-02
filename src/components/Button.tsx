interface ButtonProps {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }): JSX.Element => {
	return (
		<button className="block py-3 px-4 container rounded-full border border-solid border-tertiary bg-tertiary text-white">
			{children}
		</button>
	);
};

export default Button;
