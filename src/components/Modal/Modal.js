import { useEffect, useRef } from 'react';
import cn from 'classnames';
import css from './Modal.module.css';

const Modal = ({ isOpen, title, children, onCloseModal }) => {
	const modalEl = useRef();

	useEffect(() => {
		document.querySelector('body').style.overflow = isOpen ? 'hidden' : null;
	}, [isOpen]);

	const handleCloseModal = () => {
		onCloseModal && onCloseModal(false);
	};

	const handleClickRoot = (e) => {
		if (!modalEl.current.contains(e.target)) {
			handleCloseModal();
		}
	};

	return (
		<div className={cn(css.root, { [css.open]: isOpen })} onClick={handleClickRoot}>
			<div ref={modalEl} className={css.modal}>
				<div className={css.head}>
					{title}
					<span className={css.btnClose} onClick={handleCloseModal} />
				</div>
				<div className={css.content}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
