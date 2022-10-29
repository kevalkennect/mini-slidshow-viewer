import { createStore } from "vuex";

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  counter: 0,
  slides: [],
  currentSlide: {},
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  nextSlide(state) {
    state.counter++;
  },
  prevSlide(state) {
    state.counter--;
  },
  setSlides(state, payload) {
    if (payload) {
      state.slides = [...payload];
      this.dispatch("setCurrentSlide");
    }
  },
  setCurrentSlide(state) {
    const { counter, slides } = state;
    state.currentSlide = { ...slides[counter] };
  },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  nextSlide(state) {
    state.commit("nextSlide");
  },
  prevSlide(state) {
    state.commit("prevSlide");
  },
  setSlides(state, payload) {
    state.commit("setSlides", payload);
  },
  setCurrentSlide(state) {
    state.commit("setCurrentSlide");
  },
};

// getters are functions.
const getters = {
  activeSlide(state) {
    return state.counter;
  },
  currentSlide(state) {
    return state.currentSlide;
  },
  getLength(state) {
    return state.slides.length;
  },
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations,
});
