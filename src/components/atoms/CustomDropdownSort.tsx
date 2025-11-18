"use client";
import React from "react";
import { Dropdown, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/lib/hooks";
import { setSort } from "@/lib/slices/FilterSlice";

export const CustomDropdownSort = () => {
  const dispatch = useAppDispatch();

  const items: MenuProps["items"] = [
    // {
    //   key: "1",
    //   label: (
    //     <span
    //       onClick={() => dispatch(setSort(null))}
    //       className="text-amber-600 hover:text-orange-500 font-medium transition-colors duration-200"
    //     >
    //       Drop sorting
    //     </span>
    //   ),
    // },
    {
      key: "1",
      label: (
        <span
          onClick={() => dispatch(setSort("asc"))}
          className="text-amber-600 hover:text-orange-500 font-medium transition-colors duration-200"
        >
          🔼 Sort by biggest price
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => dispatch(setSort("desc"))}
          className="text-amber-600 hover:text-orange-500 font-medium transition-colors duration-200"
        >
          🔽 Sort by less price
        </span>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      placement="bottomLeft"
      overlayClassName="rounded-xl shadow-lg border border-amber-100 bg-white/95 backdrop-blur-md"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-md hover:shadow-lg transition"
      >
        Sort by price
        <DownOutlined className="text-sm" />
      </motion.button>
    </Dropdown>
  );
};
