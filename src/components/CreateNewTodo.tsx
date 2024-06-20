import { Button, TextField } from '@mui/material'
import { ChangeEvent } from 'react'

type Props = {
    newTodo: string,
    handleChangeNewTodo: (e: ChangeEvent<HTMLInputElement>)=>void,
    handlerBtnClick: ()=> void,
}

export const CreateNewTodo = ({newTodo,handleChangeNewTodo,handlerBtnClick} : Props) => {
  return (
    <div>
      <TextField 
        label="Name"
        placeholder="Name"
        size="small"
        value={newTodo}
        onChange={handleChangeNewTodo}
        />
      <Button variant="contained" onClick={handlerBtnClick}>Thêm</Button>
      </div>
  )
}
