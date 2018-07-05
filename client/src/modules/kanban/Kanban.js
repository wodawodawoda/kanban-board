import React from 'react';
import { connect } from 'react-redux';
import Lanes from '../lane/Lanes';
import { createLane } from '../lane/LaneActions';

const Kanban = (props) => {
	return (
		<div className="kanban">
			<Lanes lanes={props.lanes}/>
		</div>
	)
}

// Kanban.need = [() => return fetchLanes(); ]

const mapStateToProps = state => ({
	lanes: state.lanes
})

const mapDispatchToProps = {
	createLane
}

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
