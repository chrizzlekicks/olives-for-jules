interface ButtonProps {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }): JSX.Element => {
	return (
		<button className="block py-3 px-4 container rounded-full border-solid text-white text-lg sm:text-[1.625rem] bg-tertiary hover:bg-terhov">
			{children}
		</button>
	);
};

export default Button;
