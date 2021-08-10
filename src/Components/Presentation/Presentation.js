import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import store from "../../redux/store/store";
import Storage from "../../Services/Storage";
import FileIcon from "../../images/file.png";
import {
  selectPresent,
  showModal,
  selectImageSlider,
  delPresentItem,
  replacePresentation,
  replaceSliderImages,
} from "../../redux/createSlice/presentationSlice";
import Modal from "../Modal/Modal";
// @TODO list
// import Pagination from "../Pagination/Pagination";
import SliderCompnent from "../Slider/Slider";

export default function Presentation() {
  useEffect(() => {
    let data = Storage.getOfStorage("uploadImg");

    let storageData = data === null ? [] : data;

    let olderData = store.getState().initial.presentation;

    let newData = olderData.concat(storageData);

    let images = newData.map((item) => {
      return item.img;
    });

    store.dispatch(replacePresentation(newData));
    store.dispatch(replaceSliderImages(images));
  }, []);

  const presentation = useSelector(selectPresent);
  const selectImg = useSelector(selectImageSlider);
  const dispatch = useDispatch();
  function delItem(index) {
    dispatch(delPresentItem(index));
    window.localStorage.removeItem("uploadImg");
  }

  const show = useDispatch(showModal);
  return (
    <div className="presentation container ">
      <ul className="presentation-list">
        {presentation.map((present, index) => {
          return (
            <ListGroup key={index}>
              <ListGroup.Item className="bg-light">
                <img src={present.img} alt="Presentation" />
                <span>{present.name}</span>
                <span>{present.day}</span>
                <div>
                  <Button variant="info"> View</Button>
                  <Button
                    className="m-2"
                    variant="light"
                    onClick={() => delItem(index)}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
        <img
          onClick={() => show(showModal())}
          src={FileIcon}
          className="fileIcon"
        />
      </ul>
      <SliderCompnent item={selectImg} />
      <Modal />
    </div>
  );
}
