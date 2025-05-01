import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

import { createContext } from 'react';
import { useState } from 'react';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [appliedStyles, setAppliedStyles] = useState<{ [key: string]: string }>(
		{
			'--font-size': '18px',
			'--font-color': '#000000',
			'--bg-color': '#FFFFFF',
			'--font-family': 'Open Sans',
			'--container-width': '1394px',
		}
	);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appliedStyles['--font-family'],
					'--container-width': appliedStyles['--container-width'],
					'--font-size': appliedStyles['--font-size'],
					'--font-color': appliedStyles['--font-color'],
					'--bg-color': appliedStyles['--bg-color'],
				} as CSSProperties
			}>
			<ArticleParamsForm
				appliedStyle={appliedStyles}
				setAppliedStyles={setAppliedStyles}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
