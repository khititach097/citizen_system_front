
import { Spin, SpinProps } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";
import styles from '../../styles/components/loading/loading.module.css'
import animationLoading from '../../../public/lotties/loading.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
interface Props extends SpinProps {
    type?:"overlay-display"
}

const Loading: React.FC<Props> = (props) => {

    if(props.children) return (
        <Spin className={'flex justify-center items-center min-h-[10rem] ' + props?.className ? props?.className : ""} spinning={props.spinning} indicator={<LoadingOutlined style={{ fontSize: 36, color: "#01AA7F" }} spin  />}>
            {props.children}
        </Spin>
    )

    return (
        <>
            {props?.type === "overlay-display" ? (
                <div className={`${styles.loading_overlay_screen}`} style={props.style}>
                    <div className={`w-40 h-40 max-xl:w-32 max-xl:h-32 `}>
                        <Lottie animationData={animationLoading} loop={true} />
                    </div>
                </div>
            )
                :
                <div className={`w-40 h-40 max-xl:w-32 max-xl:h-32  `}>
                    <Lottie animationData={animationLoading} loop={true} />
                </div>
            }
        </>

    )
}


export default Loading