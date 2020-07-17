import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Table } from 'antd'
import * as UserActions from "../redux/actions/user-actions"
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import moment from "moment";

const dateFormat = "MM/DD/YYYY HH:mm:00";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Created Date',
        dataIndex: 'insertdate',
        render: (text, record) => (
            <span>{record.insertdate ? moment(record.insertdate).format(dateFormat) : ''}</span>)
    },
];
function Dashboard(props) {
    useEffect(() => { props.getUsers()}, [])
    return (
        <div className="App">
            <Table dataSource={props.userlist} columns={columns} />;
        </div>
    );
}

Dashboard.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    userlist: PropTypes.array
};
function mapStateToProps(state) {
    return {
        ...state.user
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...UserActions }, dispatch);
}
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
        null,
        { forwardRef: true }
    )(Dashboard)
);
