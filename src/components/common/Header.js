import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading, intl, location, languages, params}) => {
	const getLanguageLink = (lang) => {
		return lang;
	};
	return (
		<nav>
			<ul className="nav">
				<IndexLink to="/" activeClassName="active">Home</IndexLink>
				{" | "}
				<Link to="/courses" activeClassName="active">Courses</Link>
				{" | "}
				<Link to="/about" activeClassName="active">About</Link>
			</ul>
			<ul className="nav pull-right">
				{languages.filter(l => l !== intl.locale).map(lang => {
					return (<Link to={getLanguageLink(lang)} key={lang}> {lang} </Link>);
				})}
			</ul>
			{loading && <LoadingDots interval={100} dots={20} />}
		</nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired,
	intl: PropTypes.object.isRequired,
	languages: PropTypes.array.isRequired,
	location: PropTypes.object.isRequired,
	params: PropTypes.object.isRequired
};

export default Header;
