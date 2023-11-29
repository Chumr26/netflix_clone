import AuthForm from '@/components/AuthForm';

const Auth = () => {
    return (
        <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
            <div className="w-full h-full bg-black lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
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
