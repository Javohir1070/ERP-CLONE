import { Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import CrudCaption from '../../components/CrudCaption'
import FilterCustom from '../../components/FilterCustom'
import { Create, Edit } from '../../service/Auth'
import { useNavigate, useParams } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import GetRequest from '../../service/GetRequest'

const TeachersCrud = () => {
  //Update Part 
  const {id} = useParams()
  const singleData = id && GetRequest(`/teachers/${id}`, true)
  //Update Part 
  const navigate = useNavigate()
  const [isloading, setIsLoading] = useState(false)
  const [name, setName] = useState(null)
  const [surname, setSurname] = useState(null)
  const [age, setAge] = useState(null)
  const [experience, setExperience] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState("998")
  const [study, setStudy] = useState(null)
  const [stack, setStack] = useState((null))
  const [stackId, setStackId] = useState(null)
  const [region, setRegion] = useState(null)
  const [regionId, setRegionId] = useState(null)
  const [district, setDistrict] = useState(null)
  const [statusId, setStatusId] = useState(null)
  const [status, setStatus] = useState(null)
  const [gender, setGender] = useState(null)
  const [isMerried, setIsMerrird] = useState(null)
  const [workCompanyId, setWorkCompanyId] = useState(null)
  const [workCompany, setWorkCompany] = useState(null)

  function handleAddTeacher(e){
    e.preventDefault()
    setIsLoading(true)
    const data = { name,surname,age,stackId,stack,region,regionId,district,status,statusId,experience,gender,email,phone,isMerried,study,workCompany, workCompanyId }
    if(id){
      data.id = id
      Edit(data, `/teachers/${id}`, setIsLoading, navigate)

    }
    else{
      Create(data, "/teachers", setIsLoading, navigate)
    }
  }

  //Update Part
    useEffect(() => {
      if(singleData){
        setName(singleData.name)
        setSurname(singleData.surname)
        setAge(singleData.age)
        setExperience(singleData.experience)
        setEmail(singleData.email)
        setPhone(singleData.phone)
        setStudy(singleData.study)
        setStackId(singleData.stackId)
        setStack(singleData.stack)
        setRegionId(singleData.regionId)
        setRegion(singleData.region)
        setDistrict(singleData.district)
        setStatusId(singleData.statusId)
        setStatus(singleData.status)
        setGender(singleData.gender)
        setIsMerrird(singleData.isMerried)
        setWorkCompanyId(singleData.workCompanyId)
        setWorkCompany(singleData.workCompany)
      }
    },[singleData])
  //Update Part
  return (
    <form onSubmit={handleAddTeacher} autoComplete='off' className='p-5'>
      <Toaster position="top-center" reverseOrder={false} />
      <CrudCaption isLoading={isloading} title={"Ustoz qo'shish"}/>
      <div className='flex justify-around mt-10'>
        <div className='w-[40%] space-y-4'>
          <Input value={name}   onChange={(e) => setName(e.target.value)} required size='large' placeholder='Ism Kiriting'  allowClear/>
          <Input value={surname}   onChange={(e) => setSurname(e.target.value)} required size='large' placeholder='Familiya Kiriting'  allowClear/>
          <Input  value={age}   onChange={(e) => setAge(e.target.value)} type='number' required size='large' placeholder='Yosh Kiriting'  allowClear/>
          <Input  value={experience}   onChange={(e) => setExperience(e.target.value)}  required size='large' placeholder='Tajriba Kiriting'  allowClear/>
          <Input  value={email}   onChange={(e) => setEmail(e.target.value)} type='email'  required size='large' placeholder='Email Kiriting'  allowClear/>
          <Input  value={phone}   onChange={(e) => setPhone(e.target.value)} type='tel'  required size='large' placeholder='Telefon Raqam Kiriting'  allowClear/>
          <Input  value={study}   onChange={(e) => setStudy(e.target.value)}   required size='large' placeholder='Oqish Joyini Kiriting'  allowClear/>

        </div>
        <div className='w-[40%] flex flex-col gap-4'>
          <FilterCustom API={"/stack"} filterId={stackId} setFilterId={setStackId} setFilterName={setStack} placeholder={"Stackni tanlang"} extraClass={"!w-full"}/>
          <FilterCustom API={"/regions"} filterId={regionId} setFilterId={setRegionId} setFilterName={setRegion} placeholder={"Viloyat tanlang"} extraClass={"!w-full"}/>
          <Input value={district}   onChange={(e) => setDistrict(e.target.value)} required size='large' placeholder='Tuman Kiriting'  allowClear/>
          <FilterCustom API={"/status"} filterId={statusId} setFilterId={setStatusId} setFilterName={setStatus} placeholder={"Lavozim tanlang"} extraClass={"!w-full"}/>
          <Select value={gender} onChange={(value) => setGender(value)}  allowClear   size='large' showSearch  placeholder={"Jins tanlang"} optionFilterProp="label"  options={[{label:"Erkak", value:"Erkak"},{label:"Ayol", value:"Ayol"}]} />
          <Input value={isMerried}   onChange={(e) => setIsMerrird(e.target.value)} required size='large' placeholder='Turmush qurganmisiz'  allowClear/>
          <FilterCustom API={"/workList"} filterId={workCompanyId} setFilterId={setWorkCompanyId} setFilterName={setWorkCompany} placeholder={"Ish joyini tanlang"} extraClass={"!w-full"} mode='multiple'/>
        </div>
      </div>
    </form>
  )
}

export default TeachersCrud