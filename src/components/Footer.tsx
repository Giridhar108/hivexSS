import React, {Dispatch, SetStateAction} from 'react';
import {FOOTER_FORMAT, FOOTER_SEND, LOGIN_PAGE_LINKTOGITHAB} from '../constants/variables';
import {FooterConsole, Format, FormatInner, LinkToGithabFooter} from '../style/components/FooterConsole';
import {Button} from '../style/components/LoginPage';

export interface Ifooter {
  setSend: Dispatch<SetStateAction<boolean>>;
  setFormat: Dispatch<SetStateAction<boolean>>;
}

function Footer({ setSend, setFormat }: Ifooter) {

  const handleSetSend = () => {
    setSend(true);
  };
  const handleSetFormat = () => {
    setFormat(true);
  };

  return (
    <FooterConsole>
      <Button width="120px" type="submit" onClick={handleSetSend}>
        {FOOTER_SEND}
      </Button>
      <LinkToGithabFooter href="https://github.com/Giridhar108/hivexSS" target="_blank">
        {LOGIN_PAGE_LINKTOGITHAB}
      </LinkToGithabFooter>
      <Format>
        <FormatInner onClick={handleSetFormat}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path d="M21 10H7" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 6H3" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 14H7" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 18H3" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
          {FOOTER_FORMAT}
        </FormatInner>
      </Format>
    </FooterConsole>
  );
}

export default Footer;
