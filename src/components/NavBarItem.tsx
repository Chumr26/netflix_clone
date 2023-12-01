interface NavBarItemProps {
    label: string;
}

const NavBarItem = ({ label }: NavBarItemProps) => {
    return (
        <div className="text-white cursor-pointer hover:text-gray-300 transition">
            {label}
        </div>
    );
};
export default NavBarItem;
