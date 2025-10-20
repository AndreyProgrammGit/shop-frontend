import React, { FC, useEffect, useState } from "react";
import type { InputNumberProps } from "antd";
import { Col, InputNumber, Row, Slider } from "antd";
import { CustomSliderProps } from "./types/CustomSliderProps";

export const CustomSlider: FC<CustomSliderProps> = ({ max }) => {
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    setInputValue(max);
  }, [max]);

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    setInputValue(newValue as number);
  };

  console.log(max, "slider");

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={max}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
          step={50}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={max}
          style={{ margin: "0 16px" }}
          step={50}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
