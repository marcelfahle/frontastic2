import PrimaryButton from "../../buttons";
export default function Hero({ data }) {
  return (
    <div className="relative">
      <img
        alt=""
        className="w-full h-full relative"
        src="https://static.overlay-tech.com/assets/8deb29f6-5a52-47b0-83eb-f55b36c4ec0f.png"
      />
      <div className="text-white absolute bottom-10 left-6 lg:bottom-16 lg:left-10 z-1">
        <p className="text-sm lg:text-lg mb-1 lg:mb-2.5">New arrivals</p>
        <p className="text-3xl font-bold lg:text-5xl mb-4 lg:mb-6">
          Ultra range Levis collection
        </p>
        <PrimaryButton className="" onClick={console.log}>
          Buy now
        </PrimaryButton>
      </div>
    </div>
  );
}
