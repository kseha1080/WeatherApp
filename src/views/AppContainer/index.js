import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

// Custom components
import Loader from '../../components/Loader';

const AppContainer = ({ children, requestLoading }) => {
  return (
    <Container>
      {requestLoading && <Loader />}
      {children}
    </Container>
  );
};

AppContainer.propTypes = {
  requestLoading: PropTypes.bool,
};

const mapStateToProps = ({ loadingReducers }) => ({
  requestLoading: loadingReducers.loading,
});

export default connect(mapStateToProps)(AppContainer);
