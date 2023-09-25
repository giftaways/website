export default function Imprint() {
  return (
    <div className="mt-12 flex h-full w-full items-center justify-center p-3">
      <div className="flex w-full max-w-screen-xl flex-col gap-6">
        <p className="text-xl font-medium">Imprint</p>
        <div className="flex w-full flex-col justify-between md:flex-row">
          <p>Information according to §5 TMG.</p>
          <p>Last edited: August 8, 2023</p>
        </div>
        <div className="flex w-full flex-col gap-6 md:flex-row">
          <div className="min-w-[280px]">
            <p className="font-medium">Operator of this website</p>
            <p className="text-zinc-400">Botnatic - Inh. Patrick Gerstacker</p>
            <p className="text-zinc-400">Schlehenweg 4</p>
            <p className="text-zinc-400">92256 Hahnbach</p>
            <br />
            <p className="font-medium">Represented by</p>
            <p className="text-zinc-400">Patrick Gerstacker</p>
            <br />
            <p className="font-medium">VAT identification number</p>
            <p className="text-zinc-400">DE356789847</p>
            <br />
            <p className="font-medium">Contact</p>
            <p className="text-zinc-400">Mail: info@botnatic.com</p>
          </div>
          <div>
            <p className="font-medium">Online dispute resolution</p>
            <p className="text-zinc-400">
              The European Comission provides a platform for online dispute
              resolution, available here: https://ec.europa.eu/consumers/odr/.
              We are neither willing nor obliged to participate in dispute
              resolution proceedings in front of a consumer arbitration board.
            </p>
            <br />
            <p className="font-medium">
              Giftaways Terms of Service and Privacy Policy
            </p>
            <p className="text-zinc-400">Terms Of Service</p>
            <p className="text-zinc-400">Privacy Policy</p>
            <br />
            <p className="font-medium">Validy of this imprint</p>
            <p className="text-zinc-400">
              This imprint is valid for the following websites, social media
              accounts and other services, as long as they are listed here.
            </p>
            <br />
            <ul>
              <li>
                <p className="text-zinc-400">- https://giftaways.xyz/</p>
              </li>
              <li>
                <p className="text-zinc-400">
                  - The Discord user / bot Giftaways with the ID
                  961913060023488564
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
