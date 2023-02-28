import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addNotice } from '../../redux/notices/operations';
import { CloseModalIcon } from '../icons/CloseModalIcon';
import { MalePetIcon } from '../icons/MalePetIcon';
import { AddPhotoOfPetIcon } from '../icons/AddPhotoOfPetIcon';
import { FemalePetIcon } from '../icons/FemalePetIcon';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  IconWrapper,
  Background,
  FerstModalWrapper,
  SecondModalWrapper,
  ModalContent,
  CloseModalButton,
  Title,
  Button,
  FerstForm,
  SecondForm,
  Input,
  Label,
  P,
  Categories,
  Category,
  GenderWrapper,
  GenderItem,
  GenderInput,
  GenderP,
  GenderLabel,
  FileBox,
  Comments,
  CategoryWrap,
  ButtonWrapper,
  AddedImage,
  Star,
  GenderTitle,
} from './ModalAddNotice.styled';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
// import { object, string, date } from 'yup';

export const ModalAddNotice = ({ showModal, setShowModal }) => {
  const [active, setActive] = useState('FerstWraper');
  const [categori, setCategory] = useState('sell');
  const [image, setImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      category: '',
      title: '',
      name: '',
      birthday: '',
      breed: '',
      gender: '',
      location: '',
      price: '',
      image: '',
      comments: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const validateFerst = () => {
    if (!formik.values.category) {
      return Notify.failure('category is required!');
    }
    if (!formik.values.title) {
      return Notify.failure('title is required!');
    }

    if (!formik.values.birthday) {
      return Notify.failure('birthday is required!');
    }
  };

  const validateSecond = () => {
    if (!formik.values.gender) {
      return Notify.failure('gender is required!');
    }
    if (!formik.values.location) {
      return Notify.failure('location is required!');
    }
    if (!formik.values.price) {
      return Notify.failure('price is required!');
    }
    if (!formik.values.image) {
      return Notify.failure('image is required!');
    }
    if (!formik.values.comments) {
      return Notify.failure('comments is required!');
    }
  };
  const closeModal = () => setShowModal(prev => !prev);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    validateSecond();
    closeModal();
    dispatch(addNotice({ ...formik.values, image: URL.createObjectURL(formik.values.image) }));
    formik.resetForm();
  };
  const handleGender = e => (formik.values.gender = e.target.value);
  const handleCategory = e => (formik.values.category = e.target.value);

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      formik.setFieldValue('image', files[0]);
    }
  };

  return (
    <>
      {showModal ? (
        <Background>
          {active === 'FerstWraper' && (
            <FerstModalWrapper showModal={showModal}>
              {' '}
              <div>
                <Title> Add Pet</Title>
                <P>Enter information about your pet. All fields are required</P>{' '}
              </div>
              <ModalContent>
                <Categories>
                  <label>
                    <CategoryWrap
                      onClick={() => {
                        setCategory('lost/found');
                      }}
                      style={{
                        backgroundColor: categori === 'lost/found' && '#F59256',
                        color: categori === 'lost/found' && '#FFFFFF',
                      }}
                    >
                      lost/found
                    </CategoryWrap>
                    <Category
                      type="radio"
                      name="lost-found"
                      value="lost-found"
                      onChange={e => handleCategory(e)}
                    ></Category>
                  </label>
                  <label>
                    <CategoryWrap
                      onClick={() => {
                        setCategory('in good hands');
                      }}
                      style={{
                        backgroundColor: categori === 'in good hands' && '#F59256',
                        color: categori === 'in good hands' && '#FFFFFF',
                      }}
                    >
                      in good hands
                    </CategoryWrap>
                    <Category
                      type="radio"
                      name="in-good-hands"
                      value="in-good-hands"
                      onChange={e => handleCategory(e)}
                    ></Category>
                  </label>
                  <label>
                    <CategoryWrap
                      onClick={() => {
                        setCategory('sell');
                      }}
                      style={{
                        backgroundColor: categori === 'sell' && '#F59256',
                        color: categori === 'sell' && '#FFFFFF',
                      }}
                    >
                      sell
                    </CategoryWrap>
                    <Category
                      type="radio"
                      name="sell"
                      value="sell"
                      onChange={e => handleCategory(e)}
                    ></Category>
                  </label>
                </Categories>

                <FerstForm onSubmit={formik.handleSubmit}>
                  <Label htmlFor="text">
                    Tittle of ad<Star>*</Star>
                  </Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="title"
                    value={formik.values.title}
                    required
                    autoFocus
                    placeholder="Type title"
                  />

                  <Label htmlFor="name ">Name pet</Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="name"
                    value={formik.values.name}
                    required
                    autoFocus
                    placeholder="Type name pet"
                  />

                  <Label htmlFor="Date">Date of birth </Label>
                  <Input
                    onChange={formik.handleChange}
                    type="date"
                    name="birthday"
                    value={formik.values.birthday}
                    required
                    autoFocus
                    placeholder="Type date of birth "
                  />
                  <Label htmlFor="Breed">Breed</Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="breed"
                    value={formik.values.breed}
                    placeholder="Type breed"
                  />
                  <ButtonWrapper>
                    <Button margin onClick={() => setShowModal(prev => !prev)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        setActive('SecondWraper');
                        validateFerst();
                      }}
                    >
                      Next
                    </Button>
                  </ButtonWrapper>
                </FerstForm>

                <CloseModalButton area-label="Close modal" onClick={closeModal}>
                  <CloseModalIcon color={'black'} />
                </CloseModalButton>

                <CloseModalIcon />
              </ModalContent>
            </FerstModalWrapper>
          )}
          {active === 'SecondWraper' && (
            <SecondModalWrapper>
              <div>
                <Title> Add Pet</Title>
              </div>

              <ModalContent>
                <GenderWrapper>
                  <GenderTitle>
                    The Sex<Star>*</Star>:
                  </GenderTitle>
                  <IconWrapper>
                    <GenderItem>
                      <GenderLabel>
                        <MalePetIcon />
                        <GenderP>Male</GenderP>
                        <GenderInput
                          type="radio"
                          name="male"
                          value="male"
                          onChange={e => handleGender(e)}
                        />
                      </GenderLabel>
                    </GenderItem>
                    <GenderItem>
                      <GenderLabel>
                        <FemalePetIcon />
                        <GenderP>Female</GenderP>
                        <GenderInput
                          type="radio"
                          name="gender"
                          value="female"
                          onChange={e => handleGender(e)}
                        />
                      </GenderLabel>
                    </GenderItem>
                  </IconWrapper>
                </GenderWrapper>
                <SecondForm onSubmit={formik.handleSubmit}>
                  <Label top htmlFor="text">
                    Location<Star>*</Star>:
                  </Label>
                  <Input
                    onChange={formik.handleChange}
                    type="location"
                    name="location"
                    value={formik.values.location}
                    required
                    autoFocus
                    placeholder="Location"
                  ></Input>
                  {categori === 'sell' && (
                    <>
                      <Label htmlFor="text">
                        Price<Star>*</Star>:
                      </Label>
                      <Input
                        bottom
                        onChange={formik.handleChange}
                        type="text"
                        name="price"
                        value={formik.values.price}
                        required
                        autoFocus
                        placeholder="price"
                      ></Input>
                    </>
                  )}

                  {formik.values.image === '' ? (
                    <FileBox htmlFor="image">
                      <label>
                        <AddPhotoOfPetIcon />
                        <GenderInput
                          id="image"
                          name="image"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          onChange={e => {
                            formik.handleChange(e);
                            onImageChange(e);
                          }}
                        />
                      </label>
                    </FileBox>
                  ) : (
                    <AddedImage>
                      <img alt="pet" src={image} />
                    </AddedImage>
                  )}

                  <Label htmlFor="text">Comments:</Label>
                  <Comments
                    onChange={formik.handleChange}
                    name="comments"
                    value={formik.values.comments}
                    autoFocus
                    placeholder="Comments"
                  ></Comments>
                  <ButtonWrapper btn mobBtn>
                    <Button
                      margin
                      onClick={() => {
                        setActive('FerstWraper');
                      }}
                    >
                      Back
                    </Button>

                    <Button onClick={handleSubmit}>Done</Button>
                  </ButtonWrapper>
                </SecondForm>

                <CloseModalButton
                  area-label="Close modal"
                  onClick={() => setShowModal(prev => !prev)}
                >
                  <CloseModalIcon color={'black'} />
                </CloseModalButton>
              </ModalContent>
            </SecondModalWrapper>
          )}
        </Background>
      ) : null}
    </>
  );
};

ModalAddNotice.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
