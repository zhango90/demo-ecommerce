import React from 'react';
import { SpinnerOverlay, SpinnerContainer} from './with-spinner.styles'

const WIthSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : <WrappedComponent {...otherProps}/>
}

export default WIthSpinner;
