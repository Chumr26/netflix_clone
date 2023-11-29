interface InputProps {
    id: string;
    onChange: (e: any) => void;
    value: string;
    label: string;
    type?: string;
}

const Input = ({ id, onChange, value, label, type }: InputProps) => {
    return (
        <div className="relative">
            <input
                id={id}
                value={value}
                onChange={onChange}
                type={type}
                placeholder=" "
                className="block bg-neutral-700 rounded-md px-6 pt-6 pb-1 w-full text-lg text-white appearance-none focus:outline-none focus:ring-0 peer"
            />
            <label
                htmlFor={id}
                className="absolute top-4 left-6 text-lg text-zinc-400 duration-150 transform z-10 origin-[0] scale-75 -translate-y-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-autofill:scale-75 peer-autofill:-translate-y-3"
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
