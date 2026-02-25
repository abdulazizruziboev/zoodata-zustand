import { Modal } from "@mantine/core"
export default function MoreModal({opened,close,animal}) {
  return (
    <Modal
    opened={opened}
    onClose={close}
    title="Batafsil malumot"
    transitionProps={{ transition: 'fade', duration: 200 }}
    >
    {`${animal?.name} ${animal?.age} yoshli ${animal?.species?.toLowerCase()} hisoblanadi.
    U asosan ${animal?.habitat} hududida yashaydi.
    ${animal?.description}`} 
    </Modal>
  )
}