/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { ComponentType, useState } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import Modal from '../modal'
interface ActionsDeleteWrapsProps {
  title: string
  buttonText: string
  component: ComponentType
}
const ActionsUpdateWrapper = ({
  component: Element,
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
      <BsFillPencilFill
        color="bg-white"
        className="ml-4 cursor-pointer"
        onClick={handleOpenModal}
      />
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={title}
        buttonText={buttonText}
        bodyModal={Element}
      />
    </>
  )
}

export default ActionsUpdateWrapper
