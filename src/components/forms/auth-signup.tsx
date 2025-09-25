'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// Internal imports
import icon from '@/assets/images/icon/icon_13.svg';
import ErrorMsg from '../common/error-msg';
import { notifySuccess, notifyError } from '@/utils/toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/database/firebase';
import { doc, setDoc } from 'firebase/firestore';

// Define form data type
interface FormData {
  email: string;
  password: string;
  samepassword: string;
}

// Validation schema
const schema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).label('Password'),
  samepassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match.')
    .label('Confirm Password'),
});

const AuthSignup: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const submitForm = async (values: FormData) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, values.email, values.password);

      // Save user data to Firestore with assigned role
      await setDoc(doc(db, 'users', response.user.uid), {
        email: values.email,
        role: 'user', // Change to 'user' for regular users
      });

      notifySuccess(`Welcome ${response.user.email}!`);
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        notifyError(error.message);
      } else {
        console.error('An unknown error occurred');
        notifyError('Something went wrong');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Email*</label>
            <input type="email" {...register('email')} placeholder="YourEmail@gmail.com" />
            <ErrorMsg msg={errors.email?.message || ""} />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-20">
            <label>Password*</label>
            <input type={showPass ? 'text' : 'password'} {...register('password')} placeholder="Enter Password" />
            <span className="placeholder_icon" onClick={() => setShowPass(!showPass)}>
              <span className={`passVicon ${showPass ? 'eye-slash' : ''}`}>
                <Image src={icon} alt="pass-icon" />
              </span>
            </span>
            <ErrorMsg msg={errors.password?.message || ""} />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-20">
            <label>Confirm Password*</label>
            <input type={showPass ? 'text' : 'password'} {...register('samepassword')} placeholder="Confirm Password" />
            <span className="placeholder_icon" onClick={() => setShowPass(!showPass)}>
              <span className={`passVicon ${showPass ? 'eye-slash' : ''}`}>
                <Image src={icon} alt="pass-icon" />
              </span>
            </span>
            <ErrorMsg msg={errors.samepassword?.message || ""} />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn-four w-100 tran3s d-block mt-20">Sign up</button>
        </div>
      </div>
    </form>
  );
};

export default AuthSignup;
