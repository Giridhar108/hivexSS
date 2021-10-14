import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {ActionTypes} from '../constants/sagaActions';
import {MAIN_QUERY, MAIN_RESPONSE} from '../constants/variables';
import {isJsonString} from '../helpers/isJsonString';
import {UseFormField} from '../hooks/useFormField';
import {Label, MainConsole, SectionQuery, Spliter, Textarea, WrapperColumn} from '../style/components/MainConsole';
import { spliterSvg } from '../svg/spliterSvg';
import { Imain } from '../types/types';
import HistoryResponse from './HistoryResponse';

function Main({send, format, setSend, setFormat}: Imain) {
  const dispatch = useAppDispatch();
  const {oneQuery} = useAppSelector((state) => state.query);

  const [clear, setclear] = React.useState(false);
  const [errorQuery, setErrorQuery] = React.useState(false);
  const [response, setResponse] = React.useState('');
  const textareaOne = UseFormField(clear, setclear);

  useEffect(() => {

    if (send && isJsonString(textareaOne.value)) {
      dispatch({type: ActionTypes.QUERY, payload: JSON.parse(textareaOne.value)});
      setSend(false);
      setErrorQuery(false);
    }

    if (!isJsonString(textareaOne.value) && textareaOne.value.length > 0) {
      setSend(false);
      setErrorQuery(true);
    }

    if (format && isJsonString(textareaOne.value)) {
      textareaOne.onChange(JSON.stringify(JSON.parse(textareaOne.value), null, 3));
      setFormat(false);
    }
  }, [send, format]);

  useEffect(() => {
    setResponse(oneQuery.response !== '' ? JSON.stringify(JSON.parse(oneQuery.response), null, 3) : '');
  }, [oneQuery]);

  return (
    <MainConsole>
      <HistoryResponse/>
      <SectionQuery>
        <WrapperColumn>
          <Label colorLabel={errorQuery} htmlFor="one">
            {MAIN_QUERY}
          </Label>
          <Textarea colorLabel={errorQuery} name="one" id="" {...textareaOne}></Textarea>
        </WrapperColumn>
        <Spliter>
          {spliterSvg}
        </Spliter>
        <WrapperColumn>
          <Label colorLabel={oneQuery.status === 'reject'} htmlFor="two">{MAIN_RESPONSE}</Label>
          <Textarea colorLabel={oneQuery.status === 'reject'} readOnly name="two" id="" defaultValue={response}></Textarea>
        </WrapperColumn>
      </SectionQuery>
    </MainConsole>
  );
}

export default Main;
