import { memo } from 'react';
const NumberCircle:React.FC<any> = (props: any) => {
    const { text  } = props;
  
    return (
        <div {...props} className={`circle ${props.className}`}>{text}</div>
    );
  };
  
export default memo(NumberCircle);
  