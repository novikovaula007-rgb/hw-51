interface Props {
    number: number
}

const RandomNumber: React.FC<Props> = ({number}) => {
    return (
        <div className="numberCircle">{number}</div>
    );
};

export default RandomNumber;