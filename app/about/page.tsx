import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[500px] relative">
        <Image
          src="/assets/about.jpg"
          fill
          alt="about image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          About Us
        </h1>
      </div>
      <div className="leading-8 text-lg bg-white mt-[-80px] relative w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          eligendi provident dolorum dicta assumenda iusto ipsam nesciunt modi
          tempora quam. Quas, fuga tempore. Dicta animi minima ipsum tempore
          beatae laboriosam enim molestias, necessitatibus obcaecati eligendi
          sapiente harum laborum ea. Et veritatis voluptas dicta porro
          reprehenderit iure quidem eos repudiandae veniam deleniti, expedita
          nobis, omnis velit! In saepe aliquam quod officiis minima eos tempora
          eum corrupti, officia voluptate provident quam mollitia dolores harum
          culpa odio commodi facere aut veniam obcaecati ipsum tempore nemo.
          Velit officiis nam expedita quasi ad, repellendus, voluptate atque
          laborum explicabo obcaecati facilis repudiandae vero quas odio. Saepe
          delectus laborum ducimus? Quasi consequuntur eius porro? Suscipit
          ratione dolorem soluta eaque exercitationem, tenetur itaque nemo
          atque? Tempora delectus expedita, impedit, consequatur esse ut illo
          nisi suscipit dolore sunt, placeat eveniet tempore minus sequi.
        </p>
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/signature.png"
            width={500}
            height={500}
            alt="signature"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
