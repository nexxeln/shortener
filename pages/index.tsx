import type { NextPage } from "next";
import { Button, Container, TextInput, Title } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Title mb="xl">SHORTENER</Title>
        <form>
          <TextInput label="URL" required />
          <Button type="submit" my={10} size="sm" color="violet">
            Shorten
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Home;
