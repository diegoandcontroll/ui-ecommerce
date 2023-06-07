'use client'
import React, { useEffect, useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  buttonText: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  buttonText,
}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isOpen) {
    return null
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div
      className={`fixed z-10 top-8 left-[54rem] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none transition-opacity ${
        isMounted ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative w-auto max-w-md mx-auto my-6">
        <div className="bg-slate-800 p-6 rounded-lg shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button className="px-4 rounded-full" onClick={onClose}>
              <IoIosCloseCircle className="w-6 h-6" />
            </button>
          </div>
          <div className="mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span>Deseja realmente deletar o item?</span>
            </label>
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={onClose}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
