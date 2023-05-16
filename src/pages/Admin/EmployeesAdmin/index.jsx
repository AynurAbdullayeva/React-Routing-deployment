import React from 'react'
import { Table } from 'antd';
import { useState } from 'react';


const EmployeesAdmin = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === 'id' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'name',
          value: 'name',
        }
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age
    },
    {
      title: 'salary',
      dataIndex: 'asalary',
      key: 'salary',
      sorter: (a, b) => a.salary- b.salary,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      filters: [
        {
          text: 'position',
          value: 'position',
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'position' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <>
     
     <Table style={{width:"80%",margin:'0 auto'}}
      columns={columns}
      dataSource={employees}
    />
    </>
  );
};
export default EmployeesAdmin;