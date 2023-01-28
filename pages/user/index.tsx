import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {useSelector ,TypedUseSelectorHook, useDispatch} from 'react-redux'
import { BASE_URL } from '../../api/url'
import Button from '../../components/common/Button'
import NoteComponent from '../../components/common/NoteComponent'
import Layout from '../../components/userlayout/Layout'
import { AppDispatch, RootState } from '../../features/store'
import useFetch from '../../hooks/useFetch'
import { note } from '../../mock'
import {MdOutlineStickyNote2} from 'react-icons/md'
import { handleEditNote } from '../../features/noteSlice'

const Index = ():JSX.Element => {
  const router=useRouter()

const isLoggedIn=useSelector((state:RootState)=>state.note.isLoggedIn)

    useEffect(() => {
    if (!isLoggedIn )
      router.push("/login", undefined, { shallow: true });
  }, []);

  if (!isLoggedIn ) return <></>;

const user=useSelector((state:RootState)=>state.note.userData)
const dependant=useSelector((state:RootState)=>state.note.dependant)

const dispatch:AppDispatch=useDispatch()
  const url=`api/notelist/${user?.id}`

  const {fetchData,loading}=useFetch(url,dependant)


  
  return (
    <div className=' p-4'> 
    <div className='flex mb-8 justify-between items-center'>
      <p className="md:text-lg  text-sm tracking-wide font-semibold">
          Manage Notes
      </p>

      <div>
        <Button onClick={()=>{
          dispatch(handleEditNote({id:0,title:'',content:''}))
          router.push('/user/create_note')
          
          }} text='Create Note'/>
      </div>
      </div>



       { fetchData.length===0?<div className=" w-full flex flex-col space-y-4 justify-center items-center h-60 border rounded-md">
          <div className="h-10 w-10 rounded-full  flex justify-center items-center bg-primary">
            <MdOutlineStickyNote2 className="text-white" />
          </div>
          <p className="text-lg font-semibold">No Note yet</p>
          <p className="text-textColor text-sm">
            Hi, {user?.full_name}, you have not created any note yet,
          </p>
        </div>:
       <div className="bg-white mb-8 p-6 border grid-cols-1 rounded-lg grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {fetchData?.map((item, idx) => (
          <NoteComponent key={idx} slug={item.slug} id={item.id} createdAt={item?.createdAt} content={item?.content} title={item?.title} />
        ))}
      </div>}
    </div>
  )
}

Index.getLayout = Layout;
export default Index


// export async function getServerSideProps(context:any) {

//   const {slug}=context.query
// const res= await fetch(`${BASE_URL}link/${slug}`)

// const data= await res.json()

// return {
//   props:{
//     data
//   }
// }



//}