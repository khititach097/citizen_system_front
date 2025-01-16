import { memo } from 'react';
const HomeOutlined:React.FC<any> = ({
    color= "#00AA86",
    bgColor= "none",
    width= "26",
    height= "26"
}) => {


    return (
        <>
            <svg width={width} height={height} viewBox={"0 0 26 26"} fill={bgColor} xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 6.16417L18.4167 11.0392V19.5H16.2501V13H9.75008V19.5H7.58342V11.0392L13.0001 
                    6.16417ZM13.0001 3.25L2.16675 13H5.41675V21.6667H11.9167V15.1667H14.0834V21.6667H20.5834V13H23.8334L13.0001 3.25Z" 
                    fill={color}
                />
            </svg>
         </>
    )
}

// HomeOutlined.defaultProps = {
//     color:"#00AA86",
//     bgColor:"none",
//     width:"26",
//     height:"26"
// }

export default memo(HomeOutlined)