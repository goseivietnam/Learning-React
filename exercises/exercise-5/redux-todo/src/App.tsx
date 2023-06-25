import './App.css'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import PlusOneOutlinedIcon from '@mui/icons-material/PlusOneOutlined';
import TextDecreaseOutlinedIcon from '@mui/icons-material/TextDecreaseOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmout } from './features/counter/counterSlice';
import { RootState } from './app/store';
import { useState } from 'react';

function App() {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  return (
    <>
      <Stack direction={"row"} spacing={3}>
        <Button variant='outlined' startIcon={<TextDecreaseOutlinedIcon />} onClick={() => { dispatch(decrement()) }}>decrement</Button>
        <Typography>{count}</Typography>
        <Button variant='outlined' startIcon={<PlusOneOutlinedIcon />} onClick={() => { dispatch(increment()) }}>increament</Button>
      </Stack>
      <Stack direction={"row"} spacing={3} mt={3}>
        <TextField onChange={(e) => setAmount(+e.target.value)}></TextField>
        <Button variant='outlined' startIcon={<PlusOneOutlinedIcon />} onClick={(e) => { dispatch(incrementByAmout(amount)) }}>increament by value</Button>
      </Stack>
    </>
  )
}

export default App
