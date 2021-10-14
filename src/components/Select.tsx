import React from 'react';
import { useSelectClose } from '../hooks/useSelectClose';
import {SelectItem, SelectItemDelete, SelectItemLine, SelectWrapper} from '../style/components/Select';
import {Iselect} from '../types/types';

function Select({select, setSelect}: Iselect) {
  const handleSetSelect = () => {
    setSelect(false);
  };

  const [ dropdown ] =  useSelectClose({ select, setSelect })

  return (
    <SelectWrapper ref={dropdown} visible={select} onClick={handleSetSelect}>
      <SelectItem onClick={handleSetSelect}>Выполнить</SelectItem>
      <SelectItem onClick={handleSetSelect}>Скопировать</SelectItem>
      <SelectItemLine></SelectItemLine>
      <SelectItemDelete onClick={handleSetSelect}>Удалить</SelectItemDelete>
    </SelectWrapper>
  );
}

export default Select;
