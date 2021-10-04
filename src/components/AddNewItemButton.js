import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import BaseButton from './BaseButton'

const AddNewItemButton = () => {
    return (
        <>
            <BaseButton
                type="submit"
                name="Add user"
                className="bg-blue-600 hover:bg-blue-500 px-3 py-1 text-white rounded-md text-sm capitalize sm:block hidden"
            />
            
            <BaseButton
                type="submit"
                name={<AiOutlinePlus size="20px" />}
                className="bg-blue-600 hover:bg-blue-500 px-4 py-1 text-white rounded-md capitalize sm:hidden"
            />
        </>
    )
}

export default AddNewItemButton
