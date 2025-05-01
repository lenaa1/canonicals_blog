import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useEffect, useState } from 'react';
import { RadioGroup } from '../radio-group';
import { fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { Select } from '../select';
import { fontFamilyClasses } from 'src/constants/articleProps';
import { fontFamilyOptions } from 'src/constants/articleProps';
import { fontColors } from 'src/constants/articleProps';
import { backgroundColors } from 'src/constants/articleProps';
import { contentWidthArr } from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = (props: any) => {
	type SelectedStyles = {
		fontSize: OptionType;
		fontColor: OptionType;
		bgColor: OptionType;
		fontFamily: OptionType;
		contentWidth: OptionType;
	};

	const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

	const defaultSelected = {
		fontSize: { title: '18px', value: '18px', className: 'font-size-18' },
		fontFamily: {
			title: 'Open Sans',
			value: 'Open Sans',
			className: fontFamilyClasses[0],
		},
		fontColor: {
			title: 'Черный',
			value: '#000000',
			className: 'font-black',
			optionClassName: 'option-black',
		},
		bgColor: {
			title: 'Белый',
			value: '#FFFFFF',
			className: 'bg-white',
			optionClassName: 'option-white',
		},
		contentWidth: {
			title: 'Широкий',
			value: '1394px',
			className: 'width-wide',
			optionClassName: 'option-wide',
		},
	};

	const [selected, setSelected] = useState<SelectedStyles>(defaultSelected);

	function handleChange(e: any) {
		e.preventDefault();
	}

	return (
		<>
			<ArrowButton
				setSidebarIsOpen={setSidebarIsOpen}
				sidebarIsOpen={sidebarIsOpen}
			/>
			<aside
				className={`${styles.container} ${
					sidebarIsOpen ? styles.container_open : ''
				}`}>
				<form onSubmit={handleChange} className={styles.form}>
					<Select
						onChange={(i) =>
							setSelected((prev) => ({ ...prev, fontFamily: i }))
						}
						title='шрифт'
						options={fontFamilyOptions}
						selected={selected.fontFamily}
					/>

					<RadioGroup
						onChange={(i) => setSelected((prev) => ({ ...prev, fontSize: i }))}
						options={fontSizeOptions}
						name={'размер шрифта'}
						selected={selected.fontSize}
						title='размер шрифта'
					/>

					<Select
						onChange={(i) => setSelected((prev) => ({ ...prev, fontColor: i }))}
						title='цвет шрифта'
						options={fontColors}
						selected={selected.fontColor}
					/>

					<Select
						onChange={(i) => setSelected((prev) => ({ ...prev, bgColor: i }))}
						title='цвет фона'
						options={backgroundColors}
						selected={selected.bgColor}
					/>

					<Select
						onChange={(i) =>
							setSelected((prev) => ({ ...prev, contentWidth: i }))
						}
						title='ширина контента'
						options={contentWidthArr}
						selected={selected.contentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={() => {
								props.setAppliedStyles({
									'--font-size': '18px',
									'--font-color': '#000000',
									'--bg-color': '#FFFFFF',
									'--font-family': 'Open Sans',
									'--container-width': '1394px',
								});
								setSelected(defaultSelected);
							}}
						/>
						<Button
							onClick={() => {
								props.setAppliedStyles({
									'--font-size': selected.fontSize.value,
									'--font-color': selected.fontColor.value,
									'--bg-color': selected.bgColor.value,
									'--font-family': selected.fontFamily.value,
									'--container-width': selected.contentWidth.value,
								});
								setSidebarIsOpen(false);
							}}
							title='Применить'
							type='submit'
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
