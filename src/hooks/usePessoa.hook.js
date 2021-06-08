import { useContext } from 'react';
import { PersonContext } from '../contexts/PessoaContextProvider';

export const usePerson = () => {
  const { person, setData } = useContext(PersonContext);
  return [person, setData];
};