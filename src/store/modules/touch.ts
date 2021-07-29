import { touchState } from "@/typings/store";

const state = {
  touching: false,
};

const getters = {
  touching: () => state.touching,
};

const mutations = {
  SET_TOUCHING(state: touchState, flag: boolean) {
    state.touching = flag;
  },
};

export default {
  state,
  getters,
  mutations,
};
