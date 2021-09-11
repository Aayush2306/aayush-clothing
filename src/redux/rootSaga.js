import { all, call } from "@redux-saga/core/effects";
import { cartSaga } from "./cart/cart.sagas";
import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)], call(cartSaga));
}
