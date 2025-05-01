import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface props{
	setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	sidebarIsOpen: boolean
}

export const ArrowButton: React.FC<props> = (props) => {
	const {setSidebarIsOpen} = props;
	const {sidebarIsOpen} = props;
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div 
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${sidebarIsOpen ? styles.container_open : ''}`} onClick={() => setSidebarIsOpen(prev => !prev)}
		>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${sidebarIsOpen ? styles.arrow_open : ''}`}
			/>
		</div>
	);
};
