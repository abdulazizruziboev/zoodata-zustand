import { create } from 'zustand'
 
export const animalCrud = create((set,get) => ({
  list: JSON.parse(localStorage.getItem("animal-list"))??[],
  editAnimal: (newData)=>{
    const { list } = get()
    let filteredData = list.map(el=>{
        if(el.id==newData.id) return newData;
        else return el;
    });
    localStorage.setItem("animal-list",JSON.stringify(filteredData));
    set({ list: filteredData })
  },
  deleteAnimal: (id) => {
    const { list } = get()
    let filteredData = list.filter(el=>{
        if(el.id==id) return false;
        else return true;
    });

    localStorage.setItem("animal-list",JSON.stringify(filteredData));
    set({ list: filteredData })
  },
  addAnimal: (data)=>{
    const { list } = get()
    let newList  = [data,...list]
    
    localStorage.setItem("animal-list",JSON.stringify(newList));
    set({ list: newList })
  }
}))

export const {editAnimal,deleteAnimal , addAnimal} = animalCrud.getState();