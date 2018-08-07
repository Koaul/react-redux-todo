import React from 'react';
import TodoContainer from './todoContainer'
import FormContainer from './formContainer'
import FilterContainer from './filterContainer'
import {Row, Col} from 'antd'
const App = () => (
    <Row
    justify="center"
    type="flex"
    >
        <Col
        style={{
            boxShadow:"0 0 30px 5px black",
            border: "1px solid black",
            height: "100vh",
            width: "45vw",
            padding: "25px"
        }}
        justify="center"
        type="flex"
        align="middle"
        >
            <Col style={{marginBottom:"25px"}}><FormContainer/></Col>
            <Col style={{marginBottom:"25px"}}><FilterContainer/></Col>
            <Col><TodoContainer/></Col>
        </Col>
    </Row>
)
export default App;