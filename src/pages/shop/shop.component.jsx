import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import {updateCollections} from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage  extends React.Component {

  state = {
    loading : true
  }

  unsubscribeFromSnapshot = null
  componentDidMount() {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      this.props.updateCollections(collectionMap)
      this.setState({loading: false})
    })
  }
  render() {
    const { match} = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={this.state.loading} {...props}/>}></Route>
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={ this.state.loading } {...props}/>}></Route>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);
