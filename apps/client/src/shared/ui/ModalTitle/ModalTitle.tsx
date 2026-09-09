import Close from '@icons/close.svg?react'

import './ModalTitle.scss'

interface Props {
   title: string
   btnHandleFunc: () => void
}
export const ModalTitle = ({ title, btnHandleFunc }: Props) => {
   return (
      <div className="modal-title">
         <h4 className="fw-bold mb-0">{title}</h4>

         <button onClick={btnHandleFunc} className="modal-title--close-btn">
            <Close />
         </button>
      </div>
   )
}
