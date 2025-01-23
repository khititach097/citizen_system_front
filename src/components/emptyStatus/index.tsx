type EmptyStatusProps = {
  status: "empty" | "muni_incorrect";
  title?: string;
  subTitle?: string | React.ReactNode;
};

export const EmptyStatus = (props: EmptyStatusProps) => {
  let { status, title, subTitle } = props;

  let src: string;
  let alt: string = "empty-data";
  let desc: React.ReactNode;

  switch (status) {
    case "empty":
      src = "/info/info.svg";
      title = title ?? "ไม่พบคำร้องของคุณ";
      desc = subTitle ?? "กรุณาตรวจสอบข้อมูลอีกครั้ง";
      break;
    case "muni_incorrect":
      src = "/info/info2.svg";
      title = "ขออภัย";
      desc = (
        <>
          <p>เขต/เทศบาล ของคุณไม่สามารถใช้งานระบบได้</p>
          <p className="leading-[12px]">
            คุณสามารถติดต่อ เขต/เทศบาล ในพื้นที่ได้โดยตรง
          </p>
        </>
      );
      break;
  }

  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-6">
      <img src={src} alt={alt} />
      <div className="pt-6 text-center">
        <p className="text-black text-base font-bold">{title}</p>
        <div className="text-grey-1">{desc}</div>
      </div>
    </div>
  );
};
