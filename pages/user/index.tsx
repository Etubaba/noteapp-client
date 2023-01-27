import { useRouter } from 'next/router'
import React from 'react'
import Button from '../../components/common/Button'
import NoteComponent from '../../components/common/NoteComponent'
import Layout from '../../components/userlayout/Layout'
import { note } from '../../mock'

const Index = ():JSX.Element => {
  const router=useRouter()
  return (
    <div className='md:p-10 p-4'> 
    <div className='flex mb-8 justify-between items-center'>
      <p className="md:text-lg  text-sm tracking-wide font-semibold">
          Manage Notes
      </p>

      <div>
        <Button onClick={()=>router.push('/user/create_note')} text='Create Note'/>
      </div>
      </div>



        <div className="bg-white mb-8 p-6 border grid-cols-1 rounded-lg grid md:grid-cols-3 gap-5 ">
        {note.map((item, idx) => (
          <NoteComponent key={idx} createdAt={item.createdAt} content={item.content} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Index