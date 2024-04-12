

function Home(props) {

    const tekst = "Ovo je moja prva aplikacija";
    return <>
        <h1>{props.naslov}</h1>
        <div>{tekst}</div></>
}

export default Home;