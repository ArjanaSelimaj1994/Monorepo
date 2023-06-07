import withLayouts from '../HOC/withLayouts'
import Option from '../components/options/Options'
import DUMMYOPTIONS from '../lib/constansts'


const Home = () => {
    return (
        <Option options={DUMMYOPTIONS}/>
    )
}

export default withLayouts(Home)