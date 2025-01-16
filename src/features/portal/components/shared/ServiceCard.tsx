import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const ServiceCard = (props: ServiceCardProps) => {
  const { title, description, image, href } = props;

  const router = useRouter();

  return (
    <div className="bg-white p-6 rounded-2xl flex flex-col justify-between gap-6 shadow-md hover:shadow-lg transition">
      <div
        className="w-full aspect-[16/9] rounded-2xl"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="flex flex-col gap-2 w-[60%]">
        <div className="text-xl font-bold line-clamp-2 min-h-[60px]">
          {title}
        </div>
        <div className="text-base line-clamp-4 min-h-24">{description}</div>
      </div>
      <div
        className="font-bold text-primary flex text-lg py-4"
        onClick={() => {
          router.push(href);
        }}
      >
        <div className="cursor-pointer flex gap-2 items-center">
          เลือกบริการนี้
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
