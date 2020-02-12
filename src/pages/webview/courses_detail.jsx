import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'
import { getGlobalData } from '@/src/utils'

class CourseDetail extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            url: getGlobalData('businessDomain') + '/channels/154.html'
        }
        this.env = process.env.TARO_ENV
    }
    componentWillMount() {
        const { source } = this.$router.params
        source !== '' && this.setState({
            url: source
        })
    }
    config = {
        navigationBarTitleText: '课程',
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default CourseDetail
