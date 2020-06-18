import m from "mori"

export default {
  fromJS: m.toClj,
  getIn: m.getIn,
  merge: (state, payload) => m.merge(state, m.hashMap(
    "location", payload.location,
    "action", payload.action
  )),
  toJS: m.toJs
}
