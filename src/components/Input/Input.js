import cn from 'classnames';
import css from './Input.module.css';

const Input = ({ value, label, type = 'text', name, onChange, required = true }) => (
	<div className={css.root}>
		<input
			value={value}
			name={name}
			onChange={onChange}
			type={type}
			className={cn(css.input, { [css.valid]: value })}
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
