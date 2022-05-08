import type { NextPage } from "next";
import { useState } from "react";
import { Button, Container, TextInput, Title } from "@mantine/core";

const Home: NextPage = () => {
  const [value, setValue] = useState("https://nexxel.dev");

  return (
    <>
      <Container>
        <Title mb="xl">SHORTENER</Title>
        <form>
          <TextInput
            label="URL"
            required
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
          <Button type="submit" my={10} size="sm" color="violet">
            Shorten
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Home;
