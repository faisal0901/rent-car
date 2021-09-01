import React, { useState, useRef } from "react";

export default function InputFile(props) {
  const { placeholder, name, className } = props;
  const [filename, setFilename] = useState(null);
  const [image, setImage] = useState(null);
  const onChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setFilename(e.target.value);
    const target = {
      target: {
        name: name,
        value: e.target.files,
      },
    };
    props.onChange(target);
  };
  const inputRef = useRef(null);
  const handleDeleteImages = () => {
    setFilename(null);
    setImage(null);
  };
  return (
    <>
      <div className={["mb-5 flex ", className].join(" ")}>
        <div className="bg-white flex-col flex">
          <input
            type="file"
            value={filename}
            ref={inputRef}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            className={["hidden"].join(" ")}
          />
          <input
            name={name}
            placeholder={placeholder}
            defaultValue={filename}
            onClick={() => inputRef.current.click()}
            className={[
              "bg-white focus:outline-none border w-full px-6 py-3 w-1/2 focus:border-teal-500 border-gray-600 text-gray-600 ",
            ].join(" ")}
          />
        </div>
      </div>
      {image !== null && (
        <figure className="mt-5  h-96 relative w-80">
          <span
            onClick={() => handleDeleteImages()}
            className="absolute text-3xl cursor-pointer -top-8 -right-3 font-bold text-red-500"
          >
            x
          </span>
          <img src={image} alt="img" className="w-full h-full object-cover" />
        </figure>
      )}
    </>
  );
}
