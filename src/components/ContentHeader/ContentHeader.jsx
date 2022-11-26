import SelectOrder from './components/SelectOrder';
import TextFilter from './components/TextFilter';
import './ContentHeader.scss';

function ContentHeader() {
	return (
		<section className="content__header">
			<TextFilter />
			<SelectOrder />
		</section>
	);
}

export default ContentHeader;
