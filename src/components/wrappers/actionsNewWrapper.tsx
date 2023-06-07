/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { ComponentType, useState } from 'react'
import Button from '../form/button'
import Modal from '../modal'
interface ActionsDeleteWrapsProps {
  title: string
  text: string
  buttonText: string
  component: ComponentType
}
const ActionsNewWrapper = ({
  component: Element,
  buttonText,
  title,
  text,
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
      <Button
        onClick={handleOpenModal}
        style={{ width: '250px', height: '45px', padding: '0px' }}
      >
        {text}
      </Button>
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

export default ActionsNewWrapper
