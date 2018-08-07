import React from 'react';
import {Radio} from 'antd';
import PropTypes from 'prop-types';


const filter = ({setFilter}) => (
    <div>
        <Radio.Group defaultValue="all">
            <Radio.Button value="all" onClick={()=>setFilter('visible_all')}>All</Radio.Button>
            <Radio.Button value="active" onClick={()=>setFilter('visible_active')}>Active</Radio.Button>
            <Radio.Button value="completed" onClick={()=>setFilter('visible_completed')}>Completed</Radio.Button>
        </Radio.Group>
    </div>
)

filter.propTypes = {
    setFilter: PropTypes.func
}

export default filter;