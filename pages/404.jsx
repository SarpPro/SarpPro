import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Sorry, the page you are looking for was not found!',
        'Hello! I think you searched the wrong page!',
        'The page you wanted to go to was not found. Try again later!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Page Not Found."} />
}

export default UnkownPage;

