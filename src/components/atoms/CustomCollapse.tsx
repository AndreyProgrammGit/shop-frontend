import { CheckboxProps, Collapse, CollapseProps } from "antd";
import React, { FC, useEffect, useState } from "react";
import { CustomCollapseProps } from "./types/CustomCollapseProps";
import { CustomCheckbox } from "./CustomCheckbox";
import { RightOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setFilters } from "@/lib/slices/FilterSlice";

export const CustomCollapse: FC<CustomCollapseProps> = ({
  dataStrings,
  label,
}) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const onChange: CheckboxProps["onChange"] = (e) => {
    const { value, checked } = e.target;
    const key = label.toLowerCase();

    const updated = checked
      ? [...filters[key as "brands" | "categories"], value]
      : filters[key as "brands" | "categories"].filter(
          (item: string) => item !== value
        );

    dispatch(setFilters({ ...filters, [key]: updated }));
  };

  const strings: CollapseProps["items"] = [
    {
      key: "1",
      label: <span className="text-amber-50">{label}</span>,
      children: (
        <div className="w-full flex flex-col gap-2.5">
          {dataStrings.map((string, index) => (
            <CustomCheckbox
              key={index}
              checked={filters[
                label.toLowerCase() as "brands" | "categories"
              ].includes(string)}
              onChange={onChange}
              name={string}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <Collapse
      className="w-[200px] !bg-amber-500"
      items={strings}
      expandIcon={({ isActive }) => (
        <RightOutlined
          rotate={isActive ? 90 : 0}
          style={{ color: "#fff", fontSize: "14px" }}
        />
      )}
      defaultActiveKey={["1"]}
    />
  );
};
