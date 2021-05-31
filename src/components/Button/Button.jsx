import './button.css';
export const Button = ({sign, onclick, btnName}) => {
    const classname = `${sign} button`;
    return (
        <button className={classname} onClick={onclick}> {btnName}
        </button>
    );
}