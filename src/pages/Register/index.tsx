/* eslint-disable no-useless-escape */
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef, useState } from 'react';
import { Background, Container } from './styles';
import { Input } from '../../components/Input';
import { MaskedInput } from '../../components/MaskedInput';
import { FiUser } from 'react-icons/fi';
import { MdDateRange, MdPlace } from 'react-icons/md';
import { AiOutlineNumber } from 'react-icons/ai';
import * as Yup from 'yup';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { api } from '../../services/api';

interface SubmitProps {
  name: string;
  born: string;
  CPF: string;
  CEP: string;
  street: string;
  number: string;
  city: string;
  UF: string;
}

interface CEPProps {
  logradouro: string;
  localidade: string;
  uf: string;
}

export const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [streetField, setStreetField] = useState('');
  const [cityField, setCityField] = useState('');
  const [UFField, setUFField] = useState('');

  const findCEP = (CEP: string) => {
    try {
      let response = {} as CEPProps;
      api.get(`ws/${CEP.replace('-', '')}/json`).then(apiResponse => {
        response = apiResponse.data as CEPProps;

        const { localidade, logradouro, uf } = response;

        setStreetField(logradouro);
        setCityField(localidade);
        setUFField(uf);
      });
    } catch (err) {}
  };

  const handleSubmit = async (data: SubmitProps) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        born: Yup.string().matches(
          /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
          'A data informada deve ser válida',
        ),
        CPF: Yup.string().matches(
          /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
          'O CPF deve estar no padrão correto',
        ),
        CEP: Yup.string().matches(
          /^\d{5}-\d{3}$/,
          'O formato de CEP deve ser válido',
        ),
        street: Yup.string().required('Campo obrigatório'),
        number: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        UF: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      localStorage.setItem('@HealthyFood:user', JSON.stringify(data));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
    }
  };

  return (
    <Container>
      <Background />

      <div className='form'>
        <div className='header'>
          <p>START FOR FREE</p>
          <h1>Register to Healthy Food</h1>
          <p>
            Already a member? <a href='/register'>Login</a>
          </p>
        </div>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name='name' icon={FiUser} type='text' placeholder='Nome' />
          <MaskedInput
            name='born'
            mask='99/99/9999'
            icon={MdDateRange}
            type='text'
            placeholder='Data de nascimento'
          />
          <MaskedInput
            name='CPF'
            mask='999.999.999-99'
            icon={AiOutlineNumber}
            type='text'
            placeholder='CPF'
          />
          <MaskedInput
            name='CEP'
            mask='99999-999'
            customBlur={currentValue => findCEP(currentValue.target.value)}
            icon={MdPlace}
            type='text'
            placeholder='CEP'
          />
          <Input
            name='street'
            icon={MdPlace}
            type='text'
            placeholder='Logradouro'
            customValue={streetField}
            customChange={value => setStreetField(value.target.value)}
          />
          <Input
            name='number'
            icon={MdPlace}
            type='text'
            placeholder='Número'
          />
          <Input
            name='city'
            icon={MdPlace}
            type='text'
            placeholder='Cidade'
            customValue={cityField}
            customChange={value => setCityField(value.target.value)}
          />
          <Input
            name='UF'
            icon={MdPlace}
            type='text'
            placeholder='Estado'
            customValue={UFField}
            customChange={value => setUFField(value.target.value)}
          />

          <button type='submit'>Registrar</button>
        </Form>
      </div>
    </Container>
  );
};
