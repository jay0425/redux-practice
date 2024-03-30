import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const login = () => {
    dispatch({ type: 'LOGIN', payload: { id: 'jay', password: '123' } });
  };
  const countUp = () => {
    dispatch({ type: 'INCREMENT', payload: { num: 5 } });
  };
  const countDown = () => {
    dispatch({ type: 'DECREASE', payload: { num: 3 } });
  };
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={countUp}>카운트 업!!</button>
        <button onClick={countDown}>카운트 다운!!</button>
      </div>
      <h1>
        {id},{password}
      </h1>
      <button onClick={login}>로그인</button>
      <Box />
    </>
  );
}

export default App;
