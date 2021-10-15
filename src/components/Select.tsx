import React from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import { ActionTypes } from '../constants/sagaActions';
import { deleteQuery } from '../features/query/querySlice';
import {useSelectClose} from '../hooks/useSelectClose';
import {SelectItem, SelectItemDelete, SelectItemLine, SelectWrapper} from '../style/components/Select';
import {Iselect} from '../types/types';

function Select({select, setSelect, el, i}: Iselect) {
  const dispatch = useAppDispatch();
  const {oneQuery} = useAppSelector((state) => state.query);

  const handleSetSelect = (type?: string) => {
    setSelect(false);
    console.log(type);
    if (type === 'Удалить') {
      dispatch(deleteQuery({idx: i}));
    }
    if (type === 'Выполнить') {
      console.log(el)
      dispatch({type: ActionTypes.QUERY, payload: {request: JSON.parse(el?.text), type: 'history'}})
    }
  };

  const [dropdown] = useSelectClose({select, setSelect});

  return (
    <SelectWrapper ref={dropdown} visible={select}>
      <SelectItem onClick={() => handleSetSelect('Выполнить')}>Выполнить</SelectItem>
      <SelectItem onClick={() => handleSetSelect('Скопировать')}>Скопировать</SelectItem>
      <SelectItemLine></SelectItemLine>
      <SelectItemDelete onClick={() => handleSetSelect('Удалить')}>Удалить</SelectItemDelete>
    </SelectWrapper>
  );
}

export default Select;
