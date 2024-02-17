import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. Sorry Server Error Please Try Again Later!"} />
}

export default UnkownPage;