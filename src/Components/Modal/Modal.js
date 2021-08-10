import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Button, CloseButton } from "react-bootstrap";
import Upload from "../../images/upload.png";
import { useSelector, useDispatch } from "react-redux";
import Storage from "../../Services/Storage";
import Loader from "react-js-loader";
import {
  selectClass,
  changeCreate,
  showModal,
  addSliderImages,
} from "../../redux/createSlice/presentationSlice";

export default function Modal() {
  const selectModalWindow = useSelector(selectClass);
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");

  const maxNumber = 10;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  function createObjElement() {
    let img = images[images.length - 1].data_url;
    <Loader
      type="spinner-cub"
      bgColor={"#FFFFFF"}
      title={"spinner-cub"}
      size={1000}
    />;
    let obj = {
      name,
      img,
      checked: false,
    };

    dispatch(changeCreate(obj));
    dispatch(showModal());
    const uploadImages = images.map((elem) => {
      return elem.data_url;
    });

    dispatch(addSliderImages(...uploadImages));

    let storageData = Storage.getOfStorage("uploadImg");

    let std = storageData === null ? [] : storageData;

    std.push(obj);

    Storage.setInStorage("uploadImg", std);
  }

  function closeModal() {
    dispatch(showModal());
  }
  return (
    <div>
      <section className={`modalFile ${selectModalWindow ? "showmodal" : ""}`}>
        <CloseButton aria-label="Hide" onClick={closeModal} />
        <h3>Create Presentation</h3>
        <h6>Title</h6>
        <input type="text" onChange={handleChange} />
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <img
                src={Upload}
                style={isDragging ? { color: "red" } : {}}
                onClick={onImageUpload}
                className="upload"
                {...dragProps}
              />
              <section className="upload-image-section">
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <CloseButton onClick={() => onImageRemove(index)} />
                    </div>
                  </div>
                ))}
              </section>
              <h5>Upload Presentation</h5>
              <p>
                PNG, JPG, SVG, GIF max file size 2 Mb. White or transparent
                background
              </p>
              <Button variant="secondary" onClick={onImageRemoveAll}>
                Remove Presentation Images
              </Button>
            </div>
          )}
        </ImageUploading>

        <Button onClick={createObjElement}>CREATE</Button>
      </section>
    </div>
  );
}
