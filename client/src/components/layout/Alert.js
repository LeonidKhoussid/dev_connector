import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alert }) =>
  alert ? (
    <div className={`alert alert-${alert.niggers}`}>{alert.msg}</div>
  ) : null;

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
