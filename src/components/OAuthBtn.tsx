import type { IconType } from 'react-icons';

interface OAuthBtnProps {
    Icon: IconType;
    onClick: () => void;
}

const OAuthBtn = ({ Icon, onClick }: OAuthBtnProps) => {
    return (
        <div
            onClick={onClick}
            className="w-10 h-10 bg-white rounded-full flex flex-row items-center justify-center cursor-pointer hover:opacity-80 transition"
        >
            <Icon size={30} />
        </div>
    );
};

export default OAuthBtn;
