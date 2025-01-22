import { Space } from 'antd'
import React from 'react'
import Loading from '../loading'
import HomeOutlined from '../icons/homeOutlined'

interface CardContainerProps extends React.PropsWithChildren {
  icon?: React.ReactNode
  title?: React.ReactNode
  addonAfter?: React.ReactNode
  rootClassName?: string
  headerClassName?: string
  titleClassName?: string
  contentClassName?: string
  hiddenHeader?: boolean
  hiddenHeaderContent?: React.ReactNode;
  loading?: boolean
  hidden?: boolean
}

const CardContainer: React.FC<CardContainerProps> = (props) => {
  const {
    rootClassName,
    headerClassName,
    titleClassName,
    contentClassName = 'my-9',
    children,
    icon = <HomeOutlined />,
    addonAfter,
    title,
    hiddenHeader,
    hiddenHeaderContent,
    loading = false,
    hidden = false,
  } = props;

  const contentMobileClassName = React.useMemo(() => {
    return `max-[576px]:p-2 max-[576px]:!bg-transparent max-[576px]:shadow-none`
  }, []);

  return (
    <>
      {!hidden && (
        <div className={`${rootClassName}`}>
          {!hiddenHeader ? (
            <div className={`flex items-center justify-between bg-[#F0FFF5] border-b-[1px] border-b-[#00AA86] px-5 py-3 ${headerClassName}`}>
              <div className='flex items-center flex-auto'>
                <Space>
                  {icon}
                  <span className={`font-bold text-base ${titleClassName}`}>{title}</span>
                </Space>
              </div>
              <div className='flex-auto flex justify-end'>
                {addonAfter}
              </div>
            </div>
          ) : hiddenHeaderContent}

          <Loading spinning={loading}>
            <div className={`${contentMobileClassName} ${contentClassName}`}>
              {children}
            </div>
          </Loading>

        </div>
      )}
    </>
  )
}

export default React.memo(CardContainer)