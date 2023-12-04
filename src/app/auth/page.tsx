import AuthForm from '@/components/AuthForm';
import Image from 'next/image';
import logoImage from '/public/images/logo.png';

const Auth = () => {
    return (
        <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
            <div className="w-full h-full bg-black lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image priority height={48} src={logoImage} alt="Logo" />
                </nav>
                <div className="flex justify-center">
                    <div
                        className="w-full lg:w-2/5 lg:max-w-md bg-black bg-opacity-70 px-16 py-16 mt-2 rounded-md" /*self-center */
                    >
                        <AuthForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
