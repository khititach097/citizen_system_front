import type { Props as ButtonProps } from "components/buttons/Button";
import type { Props as ModalBasicProps } from "./ModalBasic";

export type ModalFeedbackType = "success" | "error";

export interface ModalFeebackProps extends ModalBasicProps {
  type?: ModalFeedbackType
  titleClassName?: string;
  rootTitleClassName?: string;
  description?: React.ReactNode;
  rootDescriptionClassName?: string;
  feedbackIcon?: React.ReactNode;
}

export interface ModalFeebackConfirmProps extends ModalBasicProps {
  type?: ModalFeedbackType
  titleClassName?: string;
  rootTitleClassName?: string;
  description?: React.ReactNode;
  rootDescriptionClassName?: string;
  rootContentClassName?: string;
  feedbackIcon?: React.ReactNode;
  BtnOKProps?: Omit<ButtonProps, "children">;
  BtnCancelProps?: Omit<ButtonProps, "children">;
  idcancel?: string;
  idconfirm?: string;
}