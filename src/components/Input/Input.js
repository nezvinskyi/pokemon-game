import css from './Input.module.css';

const Input = ({ value, label, type = 'text', name, onChange, required = true }) => (
	<div className={css.root}>
		<input
			value={value}
			name={name}
			onChange={onChange}
			type={type}
			className={css.input}
			required={required}
		/>
		<span className={css.highlight} />
		<span className={css.bar} />
		<label htmlFor={name} className={css.label}>
			{label}
		</label>
	</div>
);

export default Input;
