
import Hero from "../Hero/Hero";
import Container from "../Container/Container";
import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";

const Home = () => {
  return (
    <Container>
        <Hero />
        <SearchForm />
        <List />
    </Container>
  );
};

export default Home;