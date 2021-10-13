import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {UseFormField} from '../hooks/useFormField';
import {Label, MainConsole, SectionHistory, SectionQuery, Spliter, Textarea, WrapperColumn} from '../style/components/MainConsole';

interface Imain {
  send: boolean;
  format: boolean;
  setSend: Dispatch<SetStateAction<boolean>>;
  setFormat: Dispatch<SetStateAction<boolean>>;
}

function Main({send, format, setSend, setFormat}: Imain) {
  const [clear, setclear] = React.useState(false);
  const textareaOne = UseFormField(clear, setclear);

  useEffect(() => {
    if (send) {
      console.log(textareaOne.value);
      setSend(false);
    }
    if (format) {
      console.log('set format');
      setFormat(false);
    }
  }, [send, format]);

  return (
    <MainConsole>
      <SectionHistory></SectionHistory>
      <SectionQuery>
        <WrapperColumn>
          <Label htmlFor="one">Запрос:</Label>
          <Textarea name="one" id="" {...textareaOne}></Textarea>
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
          <Label htmlFor="two">Ответ:</Label>
          <Textarea readOnly name="two" id="" defaultValue={'sadf'}></Textarea>
        </WrapperColumn>
      </SectionQuery>
    </MainConsole>
  );
}

export default Main;
