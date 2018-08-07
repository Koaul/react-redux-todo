import React from 'react'
import {Input, Button, Form, Row, Col} from 'antd'
import PropTypes from 'prop-types';

class form extends React.Component {
    state = { value:"" }
    handleChange = (e) => { this.setState({value:e.target.value}) }
    handleSubmit = (e) => {
        this.props.add_todo(this.state.value);
        this.setState({value:""});
        e.preventDefault();
    }
    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Row
                type="flex"
                justify="center"
                >
                <Col span={16}>
                    <Input type="text" placeholder='write something' 
                    onPressEnter={ this.handleSubmit }
                    onChange={ this.handleChange }
                    value={ this.state.value }
                    />
                </Col>
                <Col span={2}>
                    <Button type="primary" htmlType="submit">ADD TODO</Button>
                </Col>
                </Row>
            </Form>
        )
    }
}

form.propTypes = {
    add_todo: PropTypes.func
}

export default form;