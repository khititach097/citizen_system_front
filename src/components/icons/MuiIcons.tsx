// import {
//   PendingActionsOutlined,
//   PersonOutlineOutlined,
//   AssignmentIndOutlined,
//   AssignmentTurnedInOutlined,
//   VerticalSplitOutlined,
// } from "@mui/icons-material";
import Image from "next/legacy/image";
import CuTaxIcon from '../../public/images/allowPC.png'

interface Props {
  icon_name: any;
  size?:"sm" | "base" | "lg"
}

const MuiIcons: React.FC<Props> = ({ icon_name , size="lg" }): any => {
  const renderIcon = () => {
    let iconName = "";
    switch (icon_name) {
      case "PendingActionsOutlined":
        iconName = "pending_actions";
        break; 
      case "PersonOutlineOutlined":
        iconName = "person";
        break; 
      case "AssignmentIndOutlined":
        iconName = "assignment_ind";
        break; 
      case "AssignmentTurnedInOutlined":
        iconName = "assignment_turned_in";
        break; 
      case "VerticalSplitOutlined":
        iconName = "vertical_split";
        break; 
      case "QrCodeOutline":
        iconName = "qr_code";
        break; 
      case "SignboardOutline":
        iconName = "signpost";
        break; 
      case "LayerOutline":
        iconName = "layers";
        break; 
      case "CompareOutline":
        iconName = "compare";
        break; 
      case "UserGroupOutline":
        iconName = "supervised_user_circle";
        break; 
      case "MapOutline":
        iconName = "map";
        break; 
      case "section10":
        iconName = "upload_file";
        break; 
      case "CuTax":
        iconName = "cu-tax";
        break; 
      case "PinDropOutlined":
        iconName = "pin_drop";
        break; 
      case "NotificationsActive":
        iconName = "notifications_active";
        break; 
      case "Inquirer":
        iconName = "perm_contact_calendar";
        break;
      default:
        break;
    }
    if(iconName === "") return ;
    if(iconName === "cu-tax") return <Image src={CuTaxIcon} alt="" width={20} height={20}/>;
    return <span className={`material-icons-outlined text-${size}`}>{iconName}</span>;
  };

  return (
    <div
      className="text-sm xl:max-2xl:text-xs p-2 mr-2 rounded-full"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
    >
      {renderIcon()}
      {/* test */}
    </div>
  );
};

export default MuiIcons;
