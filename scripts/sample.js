const app = document.getElementById('app');

function Header({ title }) {
    console.log(title)
    return <h1>{title ? title : 'Default title'}</h1>;
}

function Homepage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (<div>
        <Header title="Develop. Preview. Ship." />
        <Header title="" />

        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
        <button onClick={handleClick}>Like ({likes})</button>
    </div>);
}

const root = ReactDOM.createRoot(app);
root.render(<Homepage />);