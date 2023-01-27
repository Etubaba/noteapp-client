import { MdOutlinePersonOutline } from 'react-icons/md'
import { detailsProps } from '../../interface'

const DetailsComponent = ({Icon,title,content,color}:detailsProps) => {
    return (
        <div className='flex flex-col items-center bg-white drop-shadow-md p-5'>
            <span className={` p-2   ${color!==undefined?color:'bg-primary'} rounded-full`}>
                <Icon className='text-white' />
            </span>
            <p className='font-bold'>{title}</p>
            <p className='text-xs text-gray-400 w-1/2 text-center'>
               {content}
            </p>
        </div>
    )
}

export default DetailsComponent