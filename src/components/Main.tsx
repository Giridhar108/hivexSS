import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {ActionTypes} from '../constants/sagaActions';
import {MAIN_QUERY, MAIN_RESPONSE} from '../constants/variables';
import {isJsonString} from '../helpers/isJsonString';
import {UseFormField} from '../hooks/useFormField';
import {Label, MainConsole, SectionHistory, SectionQuery, Spliter, Textarea, WrapperColumn} from '../style/components/MainConsole';

interface Imain {
  send: boolean;
  format: boolean;
  setSend: Dispatch<SetStateAction<boolean>>;
  setFormat: Dispatch<SetStateAction<boolean>>;
}

function Main({send, format, setSend, setFormat}: Imain) {
  const dispatch = useAppDispatch();
  const {oneQuery} = useAppSelector((state) => state.query);

  const [clear, setclear] = React.useState(false);
  const [errorQuery, setErrorQuery] = React.useState(false);
  const [defaultValue, setDefaultValue] = React.useState('');
  const textareaOne = UseFormField(clear, setclear);

  useEffect(() => {
    console.log('act')
    if (send && isJsonString(textareaOne.value)) {
      dispatch({type: ActionTypes.QUERY, payload: JSON.parse(textareaOne.value)});
      setSend(false);
      setErrorQuery(false);
      console.log('act')
    }
    if (!isJsonString(textareaOne.value) && textareaOne.value.length > 0) {
      setErrorQuery(true);
    }

    if (format && isJsonString(textareaOne.value)) {
      textareaOne.onChange(JSON.stringify(JSON.parse(textareaOne.value), null, 3));
      setFormat(false);
    }
  }, [send, format]);

  useEffect(() => {
    setDefaultValue(oneQuery.response !== '' ? JSON.stringify(JSON.parse(oneQuery.response), null, 3) : '');
  }, [oneQuery]);

  return (
    <MainConsole>
      <SectionHistory></SectionHistory>
      <SectionQuery>
        <WrapperColumn>
          <Label colorLabel={errorQuery} htmlFor="one">
            {MAIN_QUERY}
          </Label>
          <Textarea colorLabel={errorQuery} name="one" id="" {...textareaOne}></Textarea>
        </WrapperColumn>
        <Spliter>
          <svg width="5" height="18" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <circle cx="2.92859" cy="2" r="2" fill="black" fillOpacity="0.2" />
              <circle cx="2.92859" cy="9" r="2" fill="black" fillOpacity="0.2" />
              <circle cx="2.92859" cy="16" r="2" fill="black" fillOpacity="0.2" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="4" height="18" fill="white" transform="translate(0.928589)" />
              </clipPath>
            </defs>
          </svg>
        </Spliter>
        <WrapperColumn>
          <Label htmlFor="two">{MAIN_RESPONSE}</Label>
          <Textarea readOnly name="two" id="" defaultValue={defaultValue}></Textarea>
        </WrapperColumn>
      </SectionQuery>
    </MainConsole>
  );
}

export default Main;
