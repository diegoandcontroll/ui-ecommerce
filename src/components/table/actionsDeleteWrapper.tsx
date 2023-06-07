/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import Modal from '../modal'
interface ActionsDeleteWrapsProps {
  title: string
  buttonText: string
}
const ActionsDeleteWrapper = ({
  buttonText,
  title,
}: ActionsDeleteWrapsProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }
  return (
    <>
      <BsFillTrashFill
        color="bg-white"
        className="ml-4 cursor-pointer"
        onClick={handleOpenModal}
      />
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={title}
        buttonText={buttonText}
      />
    </>
  )
}

export default ActionsDeleteWrapper
