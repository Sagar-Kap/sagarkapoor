import Phone from "../../assets/phone.svg";
import Monitor from "../../assets/monitor.svg";
import Pointer from "~icons/lucide/mouse-pointer";

const Slider = () => {
  return (
    <section class="border m-3 col-span-2 sm:col-span-6 sm:col-start-2">
      <p>&lt;</p>
      <p>
        Visit Website <Pointer />
      </p>
      <img
        src={Phone.src}
        alt={"Emulation of the project on a phone's screen."}
      />
      <img
        src={Monitor.src}
        alt={"Emulation of the project on a monitor's screen."}
      />
      <p>&gt;</p>
    </section>
  );
};

export default Slider;
