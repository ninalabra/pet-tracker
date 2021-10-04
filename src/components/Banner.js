import { Jumbotron } from 'react-bootstrap';


export default function Banner({BannerProp}) {
    const { title, subheader } = BannerProp;

    return(
        <Jumbotron className="banner text-center">
            <h1>{title}</h1>
            <p>{subheader}</p>
        </Jumbotron>
    )
}