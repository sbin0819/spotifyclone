import { createStore, action, actionOn } from "easy-peasy";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

// const model = {
//   activeSongs: [],
//   activeSong: null,
//   changeActiveSongs: action((state: any, payload) => {
//     state.activeSongs = payload;
//   }),
//   changeActiveSong: action((state: any, payload) => {
//     state.activeSong = payload;
//   }),
//   ssrHydrate: actionOn(
//     () => HYDRATE,
//     (state: any, target) => {
//       state.activeSongs = target.payload.activeSongs;
//       state.activeSong = target.payload.activeSong;
//     }
//   ),
// };
export const store = createStore({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload;
  }),
});

// const initStore = () => {
//   return createStore(model);
// };

// export const wrapper = createWrapper(initStore);
