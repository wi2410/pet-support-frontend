import styled from 'styled-components';

export const HeaderModalSecond = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const TitleModalSecond = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
  color: #111111;

  @media screen and (max-width: 720px) {
    font-size: 24px;
    line-height: 33px;
  }
`;

export const MainModalSecond = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;

  @media screen and (max-width: 720px) {
    margin: 0px;
  }
`;

export const FooterModalSecond = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 18px;
  }
`;

export const SecondButtonModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 2px solid #f59256;
  background: #ffffff;
  color: #111111;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 19px;
  width: 180px;
  height: 44px;
  :hover {
    color: #ffffff;
    background-color: #f59256;
  }

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 12px;
  }
`;

export const TextModal = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 20px;

  @media screen and (max-width: 720px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const BoxFileModalSecond = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 182px;
  height: 182px;
  background: #fdf7f2;
  border-radius: 40px;
`;

export const InputModalSecond = styled.input`
  display: none;
`;
export const LabelModalSecond = styled.label``;

export const BoxTextereaModalSecond = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
align-content: flex-start;
flex-direction: column;
}
`;

export const TextareaModalSecond = styled.textarea`
  width: 100%;
  height: 116px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  padding: 16px;
  border-radius: 20px;
`;
