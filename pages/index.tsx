import type { NextPage } from "next";
import { useState } from "react";
import { Anchor, Button, Container, TextInput, Title } from "@mantine/core";

type ResponseData = {
  url: String;
  short: String;
};

const Home: NextPage = () => {
  const [value, setValue] = useState("https://nexxel.dev");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: value }),
    });

    const data: ResponseData = await response.json();
    setShortUrl(
      `${document.location.protocol}//${document.location.host}/${data.short}`
    );
    setLoading(false);
  };

  return (
    <>
      <Container>
        <Title mb="xl">SHORTENER</Title>

        {shortUrl ? (
          <Anchor href={shortUrl} color="violet">
            {shortUrl}
          </Anchor>
        ) : (
          <form onSubmit={onSubmit}>
            <TextInput
              label="URL"
              required
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
            <Button
              type="submit"
              my={10}
              size="sm"
              color="violet"
              loading={loading}
            >
              Shorten
            </Button>
          </form>
        )}
      </Container>
    </>
  );
};

export default Home;
