import { handleActions } from "redux-actions";

import Action from "../actions/action";

import {
  FETCHING_INFO
} from '../constants/info';

import { Info} from '../models/model';
import { State} from '../models/state';

const initalState: State<Info> = {
  items: [],
  isFetching: false,
  currentItem: null
};

export default handleActions({
  [FETCHING_INFO]: function (state: State<Info>, action: Action<Info>) {
    return {
      ...state,
      isFetching: true
    };
  }
}, initalState);
