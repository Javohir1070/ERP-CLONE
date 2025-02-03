import { Select } from 'antd'
import React from 'react'
import GetRequest from "../service/GetRequest"

const FilterStack = ({stackId, setStackId}) => {
    const stack = GetRequest("/stack")
    const options = stack.map(item => {
        const data = {
            label:item.name,
            value:item.id
        }
        return data
    })
  return (
    <Select
        value={stackId}
        onChange={(value) => setStackId(value)}
        allowClear
        className='w-[350px]'
        size='large'
        showSearch
        placeholder="Choose stack"
        optionFilterProp="label"
        options={options}
  />
  )
}

export default FilterStack