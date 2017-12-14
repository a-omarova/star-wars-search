import Pilots from './pilots';

function mapStateToProps(state) {
	return [];
}

function mapDispatchToProps(dispatch) {
	return null;
}

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Pilots);
