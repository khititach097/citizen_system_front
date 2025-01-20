import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { IoArrowBack } from "react-icons/io5";

interface ContainerProps {
  children: ReactNode;
  hiddenBanner?: boolean;
  backButtonText?: string | ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children,
  hiddenBanner = false,
  backButtonText = "กลับ",
}) => {
  const router = useRouter();

  return (
    <div className="pb-24">
      <div className="h-64 w-full bg-primary-2"></div>
      <div className="bg-white rounded-2xl py-11 container mx-auto relative -mt-32 border-[#0000000D] border-2 min-h-40">
        <div className="absolute w-full h-32 -top-32 left-0 grid grid-cols-3 items-end">
          <div
            className="flex h-full items-center gap-4 text-white cursor-pointer hover:text-light-green transition-colors"
            onClick={() => {
              router.push("/portal");
            }}
          >
            <IoArrowBack />
            <span className="font-bold text-sm1">{backButtonText}</span>
          </div>
          {!hiddenBanner && (
            <div>
              <img src="/Banner/Banner-crop.png" alt="logo" className="" />
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Container;
