import { Modal, Group,Button } from "@mantine/core"
import { deleteAnimal } from "../AnimalCrud"
export default function AnimalDeleteModal({opened,close,id}) {
  
  return (
    <Modal title="Diqqat!" 
        opened={opened}
        onClose={close}>
    Rostdan ham ushbu hayvon haqidagi ma'lumotlarni o'chirib yubormoqchimisiz?
    <Group mt="lg" justify="flex-end">
      <Button onClick={close} variant="default">
        Bekor qilish
      </Button>
      <Button color="red" onClick={()=>{
        deleteAnimal(id)
      }}>
        Ha, rostdan
      </Button>
    </Group>
    </Modal>
  )
}