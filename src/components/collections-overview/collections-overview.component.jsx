import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';
import { selectCollectionsForPreview} from '../../redux/shop/shop.selectors';


const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
    {collections.map(({id, ...OtherCollectionProps}) => (
        <CollectionPreview key={id} {...OtherCollectionProps} />
    ))}
    </div>
);

const mapStateToProps =  createStructuredSelector({
    collections: selectCollectionsForPreview
});    

export default connect(mapStateToProps)(CollectionOverview)