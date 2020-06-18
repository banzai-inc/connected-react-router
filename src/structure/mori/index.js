import m from "mori"

export default {
  fromJS: m.toClj,
  getIn: (value, path) => m.getIn(m.toClj(value), path),
  merge: (state, payload) => m.merge(state, m.hashMap(
    "location", payload.location,
    "action", payload.action
  )),
  toJS: m.toJs
}
