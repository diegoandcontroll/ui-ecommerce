/* eslint-disable no-unused-vars */
import React, { ComponentType, useEffect, useRef, useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  buttonText: string
  bodyModal?: ComponentType
}

const Modal: React.FC<ModalProps> = ({
  bodyModal: Component,
  isOpen,
  onClose,
  title,
  buttonText,
}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-700 bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div
        className="relative inset-0 right-10 w-auto max-w-md mx-auto my-6 shadow-xl bg-slate-400 rounded-lg"
        ref={modalRef}
      >
        <div className="p-6 ">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button className="p-2 rounded-full" onClick={onClose}>
              <IoIosCloseCircle className="w-6 h-6" />
            </button>
          </div>
          {Component ? (
            <>
              <Component />
            </>
          ) : (
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
          )}

          <div className="flex justify-end pt-4">
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
