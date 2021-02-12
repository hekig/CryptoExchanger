import react from 'react';

const CryptoTile = ({ data, selected, onClick }) => {
    const { name, rate, icon} = data;

    const handleCLick = () => onClick (data);


    return (
        <div className={`card ${selected && 'selected'}`} onClick={handleCLick}>
        <div className="card-body">
        <img className="coin-icon" src={icon} alt="icon"/>
            <div>{name}</div>
            <div>{rate}</div>
            </div>
            </div>
    )
}
export default CryptoTile;