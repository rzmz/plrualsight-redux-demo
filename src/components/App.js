import React, {PropTypes} from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
import { addLocaleData } from 'react-intl';
import et from 'react-intl/locale-data/et';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';
import hu from 'react-intl/locale-data/hu';
import pl from 'react-intl/locale-data/pl';
import ro from 'react-intl/locale-data/ro';
import ru from 'react-intl/locale-data/ru';
import uk from 'react-intl/locale-data/uk';

addLocaleData(et);
addLocaleData(de);
addLocaleData(es);
addLocaleData(hu);
addLocaleData(pl);
addLocaleData(ro);
addLocaleData(ru);
addLocaleData(uk);

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header
					loading={this.props.loading}
					intl={this.props.intl}
					location={this.props.location}
					languages={this.props.languages}
					params={this.props.params}
				/>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
	intl: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	languages: PropTypes.array.isRequired,
	params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		loading: state.ajaxCallsInProgress > 0,
		intl: state.intl,
		location: ownProps.location,
		languages: state.languages,
		params: ownProps.params
	};
}

export default connect(mapStateToProps)(App);
