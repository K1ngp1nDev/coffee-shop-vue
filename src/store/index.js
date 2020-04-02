import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [
      {
        bestsellers: [
          {
            name: "Solimo Coffee Beans 2 kg",
            country: "Kenya",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
            price: "10.73$",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
          },
          {
            name: "Presto Coffee Beans 1 kg",
            country: "Columbia",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
            price: "15.99$",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
          },
          {
            name: "AROMISTICO Coffee 1 kg",
            country: "Brazil",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
            price: "6.99$",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
          }
        ],
        coffee: [
          {
            name: "Death Wish Bean",
            country: "Brazil",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/91DlZZBjxzL._SX522_.jpg",
            price: "12.99$",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
          },
          {
            name: "AROMISTICO Coffee 1 kg",
            country: "Brazil",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
            price: "6.99$",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
          },
          {
            name: "Solimo Coffee Beans 2 kg",
            country: "Kenya",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
            price: "10.73$",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
          },
          {
            name: "Black Rifle Coffee",
            country: "Kenya",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/91vwF6Kh8IL._SX522_.jpg",
            price: "19.75$",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
          },
          {
            name: "Presto Coffee Beans 1 kg",
            country: "Columbia",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
            price: "15.99$",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
          },
          {
            name: "Organic Coffee One Cup",
            country: "Columbia",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/51M2fmEXTIL.jpg",
            price: "24.99$",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
          }
        ],
        goods: [
          {
            name: "Electric Spice and Coffee Grinder",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/41qvqWRCm3L.jpg",
            price: "36.99$"
          },
          {
            name: "Manual Coffee Grinder",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/91gR5HFtmaL._SL1500_.jpg",
            price: "25.99$"
          },
          {
            name: "Coffee Cup with Lid",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/71L5Ut1HHSL._SL1500_.jpg",
            price: "15.99$"
          },
          {
            name: "Pour Over Coffee Maker",
            url:
              "https://images-na.ssl-images-amazon.com/images/I/916TPwGqfML._SL1500_.jpg",
            price: "45.99$"
          }
        ],
        
      }
    ],
    selectedName: ( localStorage.getItem('name') ) 
    ? localStorage.getItem('name') : '',
    selectedImg: ( localStorage.getItem('img') ) 
    ? localStorage.getItem('img') : '',
    selectedPrice: ( localStorage.getItem('price') ) 
    ? localStorage.getItem('price') : '',
    selectedCountry: ( localStorage.getItem('country') ) 
    ? localStorage.getItem('country') : '',
    selectedDescription: ( localStorage.getItem('description') ) 
    ? localStorage.getItem('description') : '',
    filtered: []
  },
  mutations: {
    setSelected(state) {
      state.selectedName = localStorage.getItem('name');
      state.selectedImg = localStorage.getItem('img');
      state.selectedPrice = localStorage.getItem('price');
      state.selectedCountry = localStorage.getItem('country');
      state.selectedDescription = localStorage.getItem('description');
    },
    filtered(state, array) {
      state.filtered = array;
    },
    resetFilter(state) {
      state.filtered = [];
    }
  },
  actions: {
    asyncSetSelected(context) {
      context.commit('setSelected');
    },
    asyncFiltered(context, array) {
      context.commit('filtered', array);
    }
  },
  modules: {}
});
