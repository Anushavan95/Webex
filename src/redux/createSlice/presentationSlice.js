import { createSlice } from "@reduxjs/toolkit";
import Present1 from "../../images/Present1.webp";
import Present3 from "../../images/Present3.png";
import Present2 from "../../images/Present2.webp";

const initialState = {
  presentation: [
    { img: Present1, id: 0, checked: false, name: "wakira", day: "Apr 7" },
    { img: Present2, id: 1, checked: false, name: "wakira", day: "Apr 7" },
    { img: Present3, id: 2, checked: false, name: "wakira", day: "Apr 7" },
    { img: Present3, id: 3, checked: false, name: "wakira", day: "Apr 7" },
  ],
  toggleClass: false,
  sliderImages: [],
  showImg: false,
};

const presentationSlice = createSlice({
  name: "initial",
  initialState,
  reducers: {
    showModal: (state) => {
      state.toggleClass = !state.toggleClass;
    },
    changeCreate: (state, action) => {
      state.presentation.push(action.payload);
    },
    replacePresentation: (state, action) => {
      state.presentation = action.payload;
    },
    replaceSliderImages: (state, action) => {
      state.sliderImages = action.payload;
    },
    addSliderImages: (state, action) => {
      state.sliderImages.push(action.payload);
    },
    delPresentItem: (state, action) => {
      state.presentation.splice(action.payload, 1);
    },
    showImgFoo: (state) => {
      state.showImg = !state.showImg;
    },
  },
});

export const {
  showModal,
  changeCreate,
  addSliderImages,
  replacePresentation,
  replaceSliderImages,
  delPresentItem,
  showImgFoo,
} = presentationSlice.actions;
export const selectPresent = (state) => state.initial.presentation;
export const selectClass = (state) => state.initial.toggleClass;
export const selectImageSlider = (state) => state.initial.sliderImages;
export const selectShowimg = (state) => state.initial.showImg;

export default presentationSlice.reducer;
