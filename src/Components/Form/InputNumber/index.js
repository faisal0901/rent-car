import React from "react";

export default function InputNumber(props) {
  const { value, placeholder, name, suffix } = props;
  const onChange = (e) => {
    let value = String(e.target.value);
    props.onChange({
      target: {
        name: name,
        value: value,
      },
    });
  };
  const Plus = () => {
    onChange({
      target: {
        name: name,
        value: +value + 1,
      },
    });
  };
  const Minus = () => {
    onChange({
      target: {
        name: name,
        value: +value - 1,
      },
    });
  };
  return <div className="w-full"></div>;
}
