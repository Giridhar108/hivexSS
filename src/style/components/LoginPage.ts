import styled, {keyframes} from 'styled-components';

interface Props {
  inputColor?: string;
  disabled?: boolean;
}

const blur = keyframes`
  from {
    text-shadow:0px 0px 10px #fff,
      0px 0px 10px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #7B96B8,
      0px 0px 150px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px -10px 100px #7B96B8,
      0px -10px 100px #7B96B8;
  }
}`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FormInner = styled.section`
  position: relative;
  width: 520px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;

export const LogoStyled = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: -50px;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Label = styled.label<Props>`
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.inputColor};
`;

export const Iput = styled.input<Props>`
  width: 460px;
  height: 40px;
  padding: 10px;

  font-size: 18px;
  line-height: 30px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.inputColor || 'rgba(0, 0, 0, 0.2)'};
  box-shadow: ${(props) => (props.inputColor === '#CF2C00' ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : '')};
  margin-top: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  &:focus {
    transition: all 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

export const IputPass = styled(Iput)`
  font-size: 56px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 30px;
`;

export const Button = styled.button<Props>`
  width: 110px;
  height: 40px;

  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;

  background: ${(props) =>
    props.disabled
      ? 'linear-gradient(0deg, #C4C4C4, #C4C4C4), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%)'
      : 'linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  ${(props) =>
    props.disabled
      ? ''
      : `&:hover {
    transition: all 0.2s;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
    linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
  &:focus {
    transition: all 0.2s;
    box-shadow: 0 0 0 2px #45a5ff;
    outline: none;
  }
  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }`};
`;

export const Article = styled.div`
  display: flex;
  margin: 0 auto;
  width: 24px;
  height: 24px;
`;

export const ErrorEnter = styled.div`
  margin-top: 20px;
  padding: 10px 42px;
  width: 460px;
  height: 70px;
  background: rgba(207, 44, 0, 0.1);
  border-radius: 5px;
`;

export const ErrorTitle = styled.div`
  position: relative;
  font-size: 18px;
  line-height: 30px;
  color: #cf2c00;
  &::before {
    content: url('/icons/chel.svg');
    position: absolute;
    left: -34px;
    top: 3px;
  }
`;

export const ErrorText = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 20px;
  color: #cf2c00;
  opacity: 0.5;
`;

export const SubloginWrapper = styled.div`
  position: relative;
`;

export const Options = styled.div`
  position: absolute;
  right: 0;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const LinkToGithab = styled.a`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  bottom: -40px;
  left: 0;
  right: 0;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #999999;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    transition: all 0.2s;
    color: #0055fb;
  }
  &:focus {
    animation: ${blur} 0.9s ease-out infinite;
    text-shadow: 0px 0px 5px #fff, 0px 0px 7px #fff;
    outline: none;
  }
`;
