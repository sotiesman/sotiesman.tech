<script>
  import {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN,
  } from "astro:env/client";
  import { Buffer } from "buffer";
  import { onMount } from "svelte";

  const CLIENT_ID = SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = SPOTIFY_CLIENT_SECRET;
  const REFRESH_TOKEN = SPOTIFY_REFRESH_TOKEN;

  const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
  const NOW_PLAYING_ENDPOINT =
    "https://api.spotify.com/v1/me/player/currently-playing";
  const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${BASIC}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN,
      }),
    });

    const data = await response.json();

    return data.access_token;
  };

  let isPlaying = false,
    songUrl = null,
    name = null,
    artist = null;

  const last_scrobble = async () => {
    const accessToken = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 204) {
      isPlaying = false;
      songUrl = null;
      name = null;
      artist = null;

      return;
    }

    const song = await response.json();

    isPlaying = song.is_playing;
    songUrl = song.item.external_urls.spotify;
    name = song.item.name;
    artist = song.item.artists.map((artist) => artist);
  };

  onMount(() => {
    setInterval(() => last_scrobble(), 1000);
  });
</script>

{#if isPlaying !== false}
  <!-- svelte-ignore missing-declaration -->
  <span>
    <a href={songUrl}>{name.length > 30 ? `${name.substring(0, 30)}…` : name}</a
    >
    <span>{" / "}</span>
    {#each artist as artist}
      <a href={artist.external_urls.spotify}>{artist.name}</a>
      {#if artist.length === 1}
        <span>{" / "}</span>
      {/if}
    {/each}
  </span>
{/if}

<style lang="scss">
  @use "../styles/_thorns.scss";

  a {
    color: thorns.$fg0;

    &:hover,
    &:focus {
      text-decoration: unset;
    }
  }
</style>
