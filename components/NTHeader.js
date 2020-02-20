import {Menu, Layout} from 'antd';
const {Header} = Layout;

const NTHeader = () => {
    return(
        <div>
            <Header>
                <h1>Nutrition Tracker</h1>
                <Menu mode="horizontal">
                    <Menu.Item key="1" >Login</Menu.Item>    
                </Menu>
            </Header>
        </div>
    )
}

export default NTHeader;