import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../../redux/shop/shop.selectors";
import withSpinner from "../../../Components/withSpinner/withSpinner";
import CollectionOverview from "./CollectionOverview";

import { connect } from "react-redux/es/exports";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
