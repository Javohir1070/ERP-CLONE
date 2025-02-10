import { Select } from 'antd'
import React from 'react'
import GetRequest from "../service/GetRequest"

const FilterCustom = ({filterId, setFilterId, extraClass, API, placeholder, mode, setFilterName}) => {
    const data = GetRequest(API)
    const options = data.map(item => {
        const data = {
            label:item.name,
            value:item.id
        }
        return data
    })
    function onChange(value, data){
      setFilterId(value)
      if(setFilterName){
        if(mode == "multiple"){
          setFilterName(data.map(item => item.label))
        }
        else{
          setFilterName(data.label)
        }
      }
    }
  return (
    <Select
        mode={mode}
        value={filterId}
        onChange={onChange}
        allowClear
        className={` ${extraClass}`}
        size='large'
        showSearch
        placeholder={placeholder}
        optionFilterProp="label"
        options={options}
  />
  )
}

export default FilterCustom