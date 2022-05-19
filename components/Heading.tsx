import {FC, ReactNode} from "react"

type HeadingProps = {
    text: string
}

const Heading: FC<HeadingProps> = ({ text}) => {

    return <>
        <h1>{text}</h1>
    </>
}
export default Heading