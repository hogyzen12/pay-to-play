import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';

const withMetadata = meta => WrappedPage => {
  return class WithMetadata extends Component {
    render() {
      return (
        <>
          <Helmet>
            <title>{meta?.title}</title>
            <meta name="description" content={meta?.description} />
          </Helmet>

          <WrappedPage {...this.props} />
        </>
      );
    }
  };
};

export default withMetadata;
