import React from 'react';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;
const onSearch = value => console.log(value);


export default function Body() {

    const [value,setCount] = useState();


    return(
    <Space direction="vertical">
    <Search
      placeholder="Enter text"
      allowClear
      enterButton="Calculate"
      size="large"
      onSearch={onSearch}
    />

  </Space>
);
}