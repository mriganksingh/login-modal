import { useState } from 'react';

const Modal = ({ isOpen, onClose } : {
    isOpen: boolean,
    onClose: () => void
}) => {
    const [isRegistering, setIsRegistering] = useState<boolean>(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4 md:mx-0 relative">
                <div className="p-6">
                    {!isRegistering ? (
                        <LoginForm onSwitch={() => setIsRegistering(true)} />
                    ) : (
                        <RegisterForm onSwitch={() => setIsRegistering(false)} />
                    )}
                </div>
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

const LoginForm = ({ onSwitch } : {
    onSwitch: () => void;
}) => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Log into your account</h2>
        <form>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="loginEmail">
                    Email or Username
                </label>
                <input
                    type="text"
                    id="loginEmail"
                    name="loginEmail"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Email or Username"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="loginPassword">
                    Password
                </label>
                <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Password"
                />
            </div>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                Login
            </button>
            <p className="mt-4 text-sm text-gray-600">
                Not registered yet?{' '}
                <button type="button" className="text-blue-500" onClick={onSwitch}>
                    Register
                </button>
            </p>
        </form>
    </div>
);

interface RegisterFormProps {
    onSwitch: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitch }) => (
    <div>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="registerEmail">
                    Email
                </label>
                <input
                    type="email"
                    id="registerEmail"
                    name="registerEmail"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Email"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="registerUsername">
                    Username
                </label>
                <input
                    type="text"
                    id="registerUsername"
                    name="registerUsername"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Username"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="registerPassword">
                    Password
                </label>
                <input
                    type="password"
                    id="registerPassword"
                    name="registerPassword"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Password"
                />
            </div>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                Continue
            </button>
            <p className="mt-4 text-sm text-gray-600">
                Already have an account?{' '}
                <button type="button" className="text-blue-500" onClick={onSwitch}>
                    Login
                </button>
            </p>
        </form>
    </div>
);

export default Modal;
