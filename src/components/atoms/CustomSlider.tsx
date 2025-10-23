import React, { FC, useEffect, useState } from "react";
import type { InputNumberProps } from "antd";
import { Col, InputNumber, Row, Slider } from "antd";
import { CustomSliderProps } from "./types/CustomSliderProps";
import { useAppDispatch } from "@/lib/hooks";
import { useDebounce } from "@/hooks/useDebounce";
import { setPrice } from "@/lib/slices/FilterSlice";

export const CustomSlider: FC<CustomSliderProps> = ({ max }) => {
  const [inputValue, setInputValue] = useState(0);
  const debounceValue = useDebounce(inputValue, 1000);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setInputValue(max);
  }, [max]);

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    setInputValue(newValue as number);
  };

  useEffect(() => {
    dispatch(setPrice(debounceValue));
  }, [debounceValue]);

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
