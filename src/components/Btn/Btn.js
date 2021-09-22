const Btn = ({ title, onClick, disabled }) => (
	<button type="button" onClick={onClick} disabled={disabled}>
		{title}
	</button>
);

export default Btn;
