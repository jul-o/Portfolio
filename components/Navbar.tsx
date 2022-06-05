import { Navbar } from "react-bulma-components";

export default () => {
    return (
        <Navbar>
            <Navbar.Brand flexDirection="column" renderAs="a" href="#">
                <h1>Jules Sang</h1>
                <h2>Développeur frontend</h2>
            </Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
                Compétences
            </Navbar.Item>
        </Navbar>
    );
}
