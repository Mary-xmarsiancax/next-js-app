import Heading from "./Heading";
import {PostType} from "../types";
import {FC} from "react";

type PostInfoProps = {
    post:PostType
}

const ContactInfo:FC<PostInfoProps> = ({post}) => {
    const {title, body} = post || {}

    if (!post) {
        return (
            <Heading text="Empty post"/>
        )
    }
    return <>
        <Heading text={title}/>
        <div>
            <strong>{body}</strong>
        </div>
    </>
}
export default ContactInfo