import Phone from "../../assets/phone.svg";
import Monitor from "../../assets/monitor.svg";
import Pointer from "~icons/lucide/mouse-pointer";
import Left from "~icons/lucide/chevron-left";
import Right from "~icons/lucide/chevron-right";

const Slider = () => {
  return (
    <div class="sm:col-span-6 sm:col-start-2 gap-2 grid grid-cols-7 items-center">
      <Left class="bg-bg-1 size-6 sm:size-10 rounded-full p-1 ml-2 lg:ml-6" />

      <div class="col-start-2 col-span-4">
        <img
          src={Monitor.src}
          alt={"Emulation of the project on a monitor's screen."}
        />

        <div class="flex text-brand-1 sm:text-2xl gap-1 mt-[-20px] sm:mt-[-50px] lg:mt-[-80px]">
          <a
            href="something.com"
            class="underline underline-offset-8 decoration-white decoration-2"
          >
            Visit Website
          </a>
          <Pointer class="w-3 h-10" />
        </div>
      </div>

      <img
        src={Phone.src}
        alt={"Emulation of the project on a phone's screen."}
        class="col-start-6"
      />

      <Right class="bg-bg-1 size-6 sm:size-10 rounded-full p-1 col-start-7 row-start-1 ml-2 sm:ml-10" />
    </div>
  );
};

export default Slider;
