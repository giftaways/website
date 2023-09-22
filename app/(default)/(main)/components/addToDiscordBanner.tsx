import { Button } from "@/components/ui/button";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export const AddToDiscordBanner = () => {
  return (
    <div className="flex w-full justify-center bg-gray-900 p-6">
      <div className="flex max-w-lg flex-col items-center gap-6 py-6 text-center">
        <p className="font-medium">
          Invite Giftaways and make hosting and managing Giveaways easier then
          ever
        </p>
        <Button variant="secondary" className="flex gap-3">
          <DiscordLogoIcon className="scale-150" />
          Add to Discord
        </Button>
      </div>
    </div>
  );
};
