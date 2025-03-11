import LikeButton from "./like-button";

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Homepage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <Header title="Another title" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}