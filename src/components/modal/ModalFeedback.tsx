import React, { useMemo } from 'react'

// components
import ModalBasic from './ModalBasic'
import { Typography } from "antd";
import { Button } from 'components/buttons';

// icons
import CloseIcon from 'features/assets/component/shared/icons/CloseIcon';
import CheckIcon from 'features/assets/component/shared/icons/CheckIcon';

// types
import type { ModalFeebackProps } from './types'

const { Text } = Typography;

const ModalFeedback = (props: ModalFeebackProps) => {
  const {
    type = "success",
    onCancel,
    children,
    title = "Untitled",
    titleClassName,
    description = "Untitled description",
    rootDescriptionClassName,
    rootTitleClassName,
    feedbackIcon,
    bodyStyle,
    ...modalBasicProps
  } = props;

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

  const _titleClassName = useMemo(() => {
    switch (type) {
      case "success": {
        return `!block !text-primary !text-2xl !font-bold !text-center`;
      }

      case "error": {
        return `!block !text-primary-red !text-2xl !font-bold !text-center`;
      }
    }
  }, [type]);

  const _descriptionClassName = useMemo(() => `!block !text-center !text-base`, []);

  const _renderTitle = useMemo(() => {
    return typeof title === "string" ? <Text className={_titleClassName}>{title}</Text> : title;
  }, [_titleClassName, title]);

  const _renderDescription = useMemo(() => {
    return typeof description === "string" ? <Text className={_descriptionClassName}>{description}</Text> : description;
  }, [_descriptionClassName, description]);

  return (
    <ModalBasic
      footer={false}
      closeIcon={false}
      closable={false}
      onCancel={onCancel}
      bodyStyle={_defaultStyleModalBasic}
      {...modalBasicProps}
    >
      <div className='flex flex-col gap-y-3'>
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

        <Button
          primary='default'
          className='!w-full !text-base !font-semibold'
          size="large"
          onClick={onCancel}
        >ปิดหน้าต่างนี้</Button>
      </div>
    </ModalBasic>
  )
}

export default React.memo(ModalFeedback)