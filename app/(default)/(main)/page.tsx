import { AddToDiscordBanner } from "./components/addToDiscordBanner";

export default function Home() {
  return (
    <div className="flex grow flex-col">
      <div className="grow">
        <p>Home</p>
      </div>
      <AddToDiscordBanner />
    </div>
  );
}
