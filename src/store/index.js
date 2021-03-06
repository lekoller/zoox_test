import { createStore } from "vuex";

export default createStore({
  state: {
    districts: [],
    selectedDistricts: {},
    editMode: { district: false, city: false },
    targetDistrict: {},
    targetCity: {},
  },
  mutations: {
    SET_DISTRICTS(state, districts) {
      state.districts = districts;
    },
    SET_SELECTED_DISTRICT(state, stateId) {
      state.selectedDistricts[stateId] = [];
    },
    SET_CITIES_OF_SELECTED_DISTRICT(state, cities) {
      try {
        state.selectedDistricts[cities[0].stateId] = cities;
      } catch (err) {
        console.log(err);
      }
    },
    SET_NO_CITY_SELECTED_DISTRICT(state, stateId) {
      state.selectedDistricts[stateId] = 0;
    },
    SET_EDIT_MODE(state, type) {
      state.editMode[type] = !state.editMode[type];
    },
    SET_TARGET_DISTRICT(state, district) {
      state.targetDistrict = district;
    },
    SET_TARGET_CITY(state, city) {
      state.targetCity = city;
    },
  },
  actions: {
    setDistricts({ commit }, districts) {
      commit("SET_DISTRICTS", districts);
    },
    setSelectedDistrict({ commit }, stateId) {
      commit("SET_SELECTED_DISTRICT", stateId);
    },
    setCitiesOfSelectedDistrict({ commit }, cities) {
      commit("SET_CITIES_OF_SELECTED_DISTRICT", cities);
    },
    setNoCityOfSelectedDistrict({ commit }, stateId) {
      commit("SET_NO_CITY_SELECTED_DISTRICT", stateId);
    },
    setEditMode({ commit }, type) {
      commit("SET_EDIT_MODE", type);
    },
    setTargetDistrict({ commit }, district) {
      commit("SET_TARGET_DISTRICT", district);
    },
    setTargetCity({ commit }, city) {
      commit("SET_TARGET_CITY", city);
    },
  },
  modules: {},
});
