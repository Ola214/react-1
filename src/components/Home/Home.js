
import Hero from "../Hero/Hero";
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import Lists from "../Lists/Lists";

const Home = () => {
  return (
    <Container>
        <Hero />
        <SearchForm />
        <Lists />
    </Container>
  );
};

export default Home;