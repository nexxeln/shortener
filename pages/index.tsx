import type { NextPage } from "next";
import { useState } from "react";
import { Button, Container, TextInput, Title } from "@mantine/core";

const Home: NextPage = () => {
  const [value, setValue] = useState("https://nexxel.dev");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: value }),
    });
  };

  return (
    <>
      <Container>
        <Title mb="xl">SHORTENER</Title>
        <form onSubmit={onSubmit}>
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
