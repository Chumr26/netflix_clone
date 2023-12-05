'use client';

import axios from 'axios';
import { useCallback, useState, ChangeEvent } from 'react';
import { signIn } from 'next-auth/react';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import Input from './Input';
import OAuthBtn from './OAuthBtn';

const AuthForm = () => {
    const [variant, setVariant] = useState('login');

    let [loading, setLoading] = useState(false);
    let [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => {
            return currentVariant === 'login' ? 'register' : 'login';
        });
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const login = useCallback(async () => {
        setLoading(true);
        try {
            await signIn('credentials', {
                email: formValues.email,
                password: formValues.password,
                callbackUrl: '/profile',
            });
        } catch (error) {
            console.log('Login Error: ', error);
        }
    }, [formValues.email, formValues.password]);

    const register = useCallback(async () => {
        setLoading(true);
        try {
            await axios.post('/api/register', formValues);
            login();
        } catch (error) {
            console.log('Register Error: ', error);
        }
    }, [formValues, login]);

    return (
        <>
            <h2 className="text-white text-4xl font-semibold mb-8">
                {variant === 'login' ? 'Login' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
                {variant === 'register' && (
                    <Input
                        value={formValues.name}
                        onChange={handleChange}
                        id="name"
                        label="Name"
                        type="text"
                    />
                )}
                <Input
                    value={formValues.email}
                    onChange={handleChange}
                    id="email"
                    label="Email"
                    type="email"
                />
                <Input
                    value={formValues.password}
                    onChange={handleChange}
                    id="password"
                    label="Password"
                    type="password"
                />
            </div>
            <button
                onClick={variant === 'login' ? login : register}
                className="w-full mt-10 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
                {loading
                    ? 'Loading'
                    : variant === 'login'
                    ? 'Login'
                    : 'Register'}
            </button>
            <div className="flex flex-row items-center justify-center gap-4 mt-8">
                <OAuthBtn
                    Icon={FcGoogle}
                    onClick={() => {
                        setLoading(true);
                        signIn('google', { callbackUrl: '/profile' });
                    }}
                />
                <OAuthBtn
                    Icon={FaGithub}
                    onClick={() => {
                        setLoading(true);
                        signIn('github', { callbackUrl: '/profile' });
                    }}
                />
            </div>
            <p className="text-neutral-500 mt-12 text-sm">
                {variant === 'login'
                    ? 'First time using Netflix?'
                    : 'Already have an account?'}
                <span
                    onClick={toggleVariant}
                    className="text-white py-3 ml-1 hover:underline cursor-pointer"
                >
                    {variant === 'login' ? 'Create an account' : 'Login'}
                </span>
            </p>
        </>
    );
};

export default AuthForm;
