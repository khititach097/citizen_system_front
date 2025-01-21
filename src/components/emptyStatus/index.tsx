type EmptyStatusProps = {
  status: "empty" | "muni_incorrect";
  statusTextTitle?: string;
  statusTextDescription?: string;
};

export const EmptyStatus = (props: EmptyStatusProps) => {
  const { status, statusTextTitle, statusTextDescription } = props;

  let src: string;
  let alt: string = "empty-data";
  let title: string;
  let desc;

  switch (status) {
    case "empty":
      src = "/info/info.svg";
      title = "ไม่พบคำร้องของคุณ";
      desc = (
        <>
          <p>{statusTextTitle}</p>
          <p className="leading-[12px]">{statusTextDescription}</p>
        </>
      );
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
