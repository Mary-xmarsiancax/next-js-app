import Heading from "./Heading";

const ContactInfo = ({post}) => {
    const {title, body} = post || {}

    if (!post) {
        return (
            <Heading tag="h3" text="Empty post"/>
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