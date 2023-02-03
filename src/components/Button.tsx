interface ButtonProps {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }): JSX.Element => {
	return (
		<button className="block py-3 px-4 container rounded-full border border-solid text-ofj bg-tertiary text-white hover:bg-terhov">
			{children}
		</button>
	);
};

export default Button;
