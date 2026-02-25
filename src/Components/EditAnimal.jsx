import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button , Modal, Textarea} from '@mantine/core';
import { useEffect, useEffectEvent } from 'react';
import { animalCrud, editAnimal } from '../AnimalCrud';
// editAnimal


export default function AnimalEditModal({opened,editOpen,close,id}) {


  const inData = animalCrud((state)=>state.list.filter(el=>{
    if(el.id==id) return true
  })[0]);
  

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: inData,

    validate: {
      name: (value) => (value.length < 2 ? 'Iltimos kamida 2 ta harf kiriting' : null),
      habitat: (value) => (value.length < 2 ? 'Iltimos kamida 2 ta harf kiriting' : null),
      age: (value) => (value.length < !0 ? 'Iltimos yoshni kiriting' : null),
      species: (value) => (value.length < 2 ? 'Iltimos kamida 2 ta harf kiriting' : null),
      description: (value) => (value.length < 2 ? 'Iltimos kamida 2 ta harf kiriting' : null),
    },
  });

  return (
    <>
    <Modal opened={opened} onClose={close} title="Ma'lumotlarni tahrirlash">
      <form onSubmit={form.onSubmit((data)=>{
        editAnimal(data)
        close();
      })} className='flex flex-col gap-y-3'>
      <TextInput
        label="Nom"
        placeholder="Iltimos hayvon nomini kiriting"
        key={form.key('name')}
        {...form.getInputProps('name')}
        name='name'
      />
      <NumberInput
        label="Yosh"
        placeholder="Iltimos hayvon yoshini kiriting"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
        name='age'
      />
      <TextInput
        label="Yashash sharoiti"
        placeholder="Iltimos hayvon yashash sharoitini kiriting"
        key={form.key('habitat')}
        {...form.getInputProps('habitat')}
        name='habitat'
      />
      <TextInput
        label="Tur"
        placeholder="Iltimos hayvon Turni kiriting"
        key={form.key('species')}
        {...form.getInputProps('species')}
        name='species'
      />
      <Textarea
        label="Tavsif"
        placeholder="Iltimos hayvon tavsifini kiriting"
        key={form.key('description')}
        {...form.getInputProps('description')}
        name='description'
      />
      <Button type="submit" color='orange'>
        Tahrirlash
      </Button>
    </form>
    </Modal>
    </>
  )
}