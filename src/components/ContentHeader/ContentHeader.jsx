import SelectOrder from './components/SelectOrder';
import TextFilter from './components/TextFilter';
import FilterDialog from './components/FilterDialog';
import './ContentHeader.scss';

function ContentHeader() {
	return (
		<section className="content__header">
			<TextFilter />
			<div className="content__actions">
				<SelectOrder />
				<FilterDialog />
			</div>
		</section>
	);
}

export default ContentHeader;
