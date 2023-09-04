import { styled } from 'styled-components';
import { Dialog } from '@headlessui/react'

const ProfileModal = ({isOpen, setIsOpen}) => {

    const handleClose = ()=>{
        setIsOpen(false);
    }
    return (
<Dialog open={isOpen} onClose={handleClose} >
        <Dialog.Panel className = "">
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
            This will permanently deactivate your account
        </Dialog.Description>

        <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
        </p>

        {/*
            You can render additional buttons to dismiss your dialog by setting
            `isOpen` to `false`.
        */}
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleClose}>Deactivate</button>
        </Dialog.Panel>
    </Dialog>

    )
    }

export default ProfileModal

const Modal = styled(ProfileModal)`
    .dialog{
        background-color : red;
    }
`