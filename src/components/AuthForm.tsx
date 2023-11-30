'use client';

import axios from 'axios';
import { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import Input from './Input';
import OAuthBtn from './OAuthBtn';

const AuthForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => {
            return currentVariant === 'login' ? 'register' : 'login';
        });
    }, []);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', { name, email, password });
            login();
        } catch (error) {
            console.log('Register Error: ', error);
        }
    }, [name, email, password]);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', { email, password, callbackUrl: '/' });
        } catch (error) {
            console.log('Login Error: ', error);
        }
    }, [email, password]);

    return (
        <>
            <h2 className="text-white text-4xl font-semibold mb-8">
                {variant === 'login' ? 'Login' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
                {variant === 'register' && (
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        label="Name"
                        type="text"
                    />
                )}
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    label="Email"
                    type="email"
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    label="Password"
                    type="password"
                />
            </div>
            <button
                onClick={variant === 'login' ? login : register}
                className="w-full mt-10 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
                {variant === 'login' ? 'Login' : 'Register'}
            </button>
            <div className="flex flex-row items-center justify-center gap-4 mt-8">
                <OAuthBtn
                    Icon={FcGoogle}
                    onClick={() => {
                        signIn('google', { callbackUrl: '/' });
                    }}
                />
                <OAuthBtn
                    Icon={FaGithub}
                    onClick={() => {
                        signIn('github', { callbackUrl: '/' });
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
