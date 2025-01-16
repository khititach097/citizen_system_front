import React, { useMemo } from 'react'

// store
import { useAppSelector } from 'store/hooks';
import { selectorIsMobile } from 'store/selectors';

// components
import { Button } from 'components/buttons';
import ModalBasic from './ModalBasic';

// icons
import CloseIcon from 'features/assets/component/shared/icons/CloseIcon';
import CheckIcon from 'features/assets/component/shared/icons/CheckIcon';

import type { ModalFeebackConfirmProps } from './types'
import type { Props as ButtonProps } from "components/buttons/Button";

const ModalFeedbackConfirm = (props: ModalFeebackConfirmProps) => {
  const {
    open,
    type = "success",
    onCancel,
    onOk,
    children,
    title = "Untitled",
    titleClassName,
    description = "Untitled description",
    rootDescriptionClassName,
    rootTitleClassName,
    rootContentClassName,
    feedbackIcon,
    txtBtnCancel = "ยกเลิก",
    txtBtnOK = "ตกลง",
    BtnOKProps,
    BtnCancelProps,
    idcancel,
    idconfirm,
    bodyStyle,
    ...modalBasicProps
  } = props;

  const isMobile = useAppSelector(selectorIsMobile);

  const _defaultStyleModalBasic = useMemo<React.CSSProperties>(() => ({
    borderRadius: 6,
    backgroundColor: "white",
    ...bodyStyle,
  }), [bodyStyle]);

  const _feedbackIcon = useMemo(() => {
    if (feedbackIcon) {
      return feedbackIcon;
    }

    switch (type) {
      case "success": {
        return (
          <CheckIcon
            className='p-2 text-[calc(1rem+1.5vw)]'
          />
        )
      }

      case "error": {
        return (
          <CloseIcon
            className='p-2 text-[calc(1rem+1.5vw)]'
          />
        )
      }
    }
  }, [feedbackIcon, type]);

  const _btnConfigProps = useMemo<{ 
    btnOKProps?: Omit<ButtonProps, "children">; 
    btnCancelProps: Omit<ButtonProps, "children">
  }>(() => {
    switch (type) {
      case "success": {
        return {
          btnOKProps: {
            ...BtnOKProps,
          },
          btnCancelProps: {
            ...BtnCancelProps,
          },
        }
      }

      case "error": {
        return {
          btnOKProps: {
            danger: true,
            ...BtnOKProps,
          },
          btnCancelProps: {
            ...BtnCancelProps,
          }
        }
      }
    }
  }, [BtnCancelProps, BtnOKProps, type]);

  const _titleClassName = useMemo(() => {
    switch (type) {
      case "success": {
        return `block text-primary text-2xl font-bold text-center ${titleClassName}`;
      }

      case "error": {
        return `block text-primary-red text-2xl font-bold text-center ${titleClassName}`;
      }
    }
  }, [titleClassName, type]);

  const _descriptionClassName = useMemo(() => `!block !text-center !text-base`, []);

  const _renderTitle = useMemo(() => {
    return typeof title === "string" ? <span className={_titleClassName}>{title}</span> : title;
  }, [_titleClassName, title]);

  const _renderDescription = useMemo(() => {
    return typeof description === "string" ? <span className={_descriptionClassName}>{description}</span> : description;
  }, [_descriptionClassName, description]);

  return (
    <ModalBasic
      open={open}
      footer={false}
      closeIcon={false}
      closable={false}
      onCancel={onCancel}
      bodyStyle={_defaultStyleModalBasic}
      {...modalBasicProps}
    >
      <div className={`flex flex-col ${rootContentClassName}`}>
        <div className='flex justify-center items-center'>
          {_feedbackIcon}
        </div>

        <div className={rootTitleClassName}>
          {_renderTitle}
        </div>

        <div className={rootDescriptionClassName}>
          {_renderDescription}
        </div>

        {children}

        <div className="flex justify-end gap-1 mt-[10px]">
          <Button {..._btnConfigProps.btnCancelProps} primary="default" id={idcancel || ""} onClick={onCancel}>
            {txtBtnCancel}
          </Button>
          <Button {..._btnConfigProps.btnOKProps} id={idconfirm || ""} onClick={onOk}>
            {txtBtnOK}
          </Button>
        </div>
      </div>
    </ModalBasic>
  )

}

export default React.memo(ModalFeedbackConfirm)