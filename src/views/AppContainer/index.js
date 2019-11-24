import React from 'react';
import { connect } from 'react-redux';

// Material UI
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

const mapStateToProps = ({ loadingReducers }) => ({
  requestLoading: loadingReducers.loading,
});

export default connect(mapStateToProps)(AppContainer);
