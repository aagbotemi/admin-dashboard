import React from 'react'

const Modal = ({ cancel, cancelText, confirm, confirmText, message }) => {

    return (
        <div className="modal fixed shadow-lg bg-white rounded-lg left-1/2 top-1/3">
            <div className="py-4 px-6">
                <div className="text-gray-700 text-center leading-6">
                    {message}
                </div>
                <div className="flex justify-between mt-5">
                    <button className="bg-red-500 py-1 px-4 text-white text-sm rounded-md" onClick={cancel}>{cancelText}</button>
                    <button className="bg-green-400 py-1 px-4 text-white text-sm rounded-md" onClick={confirm}>{confirmText}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
