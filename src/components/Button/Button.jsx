import './button.css';
export const Button = ({sign, onclick, btnName, disabled = false}) => {
    const classname = `${sign} button`;

    return (
        <button className={classname} onClick={onclick} disabled={disabled}> {btnName}
        </button>
    );
}