import { MdOutlinePersonOutline } from 'react-icons/md'
import { detailsProps } from '../../interface'

const DetailsComponent = ({Icon,title,content,color}:detailsProps) => {
    return (
        <div className='flex flex-col max-w-[300px] items-center bg-white drop-shadow-md p-3 md:p-4'>
            <span className={` p-2   ${color!==undefined?color:'bg-primary'} rounded-full`}>
                <Icon className='text-white' />
            </span>
            <p className='font-bold mb-2'>{title}</p>
            <p className='text-xs text-gray-400  text-center'>
               {content}
            </p>
        </div>
    )
}

export default DetailsComponent