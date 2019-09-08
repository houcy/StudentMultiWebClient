import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import './index.scss'

import usersBg from '@/src/assets/images/users/users_bg.png'
import arrowRight from '@/src/assets/images/other/arrow_right.png'
import help from '@/src/assets/images/users/icon/help.png'
import customer from '@/src/assets/images/users/icon/customer.png'
import setting from '@/src/assets/images/users/icon/setting.png'
import message from '@/src/assets/images/users/icon/message.png'
import notice from '@/src/assets/images/users/icon/notice.png'
import praise from '@/src/assets/images/users/icon/praise.png'
import avatar from '@/src/assets/images/other/avatar.png'

import { showShareMenu } from '@/src/utils/index'

class Users extends Component {
    config = {
        navigationBarTitleText: '我的',
    }
    constructor() {
        super(...arguments)
        this.env = process.env.TARO_ENV
    }

    componentDidMount() {
        showShareMenu() // 开启页面分享按钮
    }

    onShowContact() {
        Taro.makePhoneCall({
            phoneNumber: '4008034725'
        })
    }

    onShareAppMessage(res) {
        if (this.env === 'h5') {
            Taro.showModal({
                title: '提示',
                content: '微信小程序搜索【袋小鼠爱编程】，点击【我的】-【分享给小伙伴】',
                showCancel: false,
                cancelText: '取消',
                cancelColor: '#7f7f7f',
                confirmText: '知道了',
                confirmColor: '#7d4c9f',
                success(modalRes) {
                    // if (modalRes.confirm) {
                    //   Taro.openSetting({
                    //     success(data) {
                    //       console.log('打开微信设置授权页面成功')
                    //     },
                    //     fail(data) {
                    //       console.log('打开微信设置授权页面失败')
                    //     },
                    //   })
                    // } else if (res.cancel) {
                    //   console.log('用户点击取消授权弹窗')
                    // }
                },
            })
        } else {
            if (res.from === 'button') {
                // 来自页面内转发按钮
                console.log(res.target)
            }
            let pages = Taro.getCurrentPages()
            let page = pages[pages.length - 1]
            let path = `${page.route}?id=${pages}`
            let imageUrl = 'https://videos.codekid.top/share_pic.jpg' // 可以是本地文件路径、代码包文件路径或者网络图片路径。支持 PNG 及 JPG 。显示图片长宽比是 5:4
            return {
                title: '欢迎来到少儿编程实验室', // 默认当前小程序名称
                path,
                imageUrl,
                success: function () {
                    Taro.showToast({
                        title: '转发成功！',
                        icon: 'success',
                    })
                },
                fail: function () {
                    Taro.showToast({
                        title: '转发失败！',
                        icon: 'none',
                    })
                },
            }
        }
    }

    render() {

        return (
            <View className='users'>
                <Image src={usersBg} className='users__bg' />
                <View className='users__avatarUrl'>
                    <Image src={avatar} className='users__avatarUrl-img' />
                </View>
                <View className='users-card'>
                    <View className='users-card__username'>
                        <Text className='users-card__text-title'>
                            小朋友
                        </Text>
                    </View>
                </View>
                <View className='users-link'>
                    <Navigator url='/pages/index/message_list' className='index__Navigator'>
                        <View className='users-link__item'>
                            <View className='users-link__icon'>
                                <Image src={message} className='users-link__icon-help' />
                            </View>
                            <View className='users-link__title'>
                                <Text className='users-link__title-text'>消息中心</Text>
                            </View>
                            <View className='users-link__subtitle'>
                                <Text className='users-link__subtitle-text'></Text>
                            </View>
                            <View className='users-link__arrow'>
                                <Image src={arrowRight} className='users-link__arrow--active' />
                            </View>
                        </View>
                    </Navigator>
                    <Navigator url='/pages/index/notice_list' className='index__Navigator'>
                        <View className='users-link__item'>
                            <View className='users-link__icon'>
                                <Image src={notice} className='users-link__icon-help' />
                            </View>
                            <View className='users-link__title'>
                                <Text className='users-link__title-text'>公告中心</Text>
                            </View>
                            <View className='users-link__subtitle'>
                                <Text className='users-link__subtitle-text'></Text>
                            </View>
                            <View className='users-link__arrow'>
                                <Image src={arrowRight} className='users-link__arrow--active' />
                            </View>
                        </View>

                    </Navigator>
                    <Navigator url='/pages/webview/help' className='index__Navigator'>
                        <View className='users-link__item'>
                            <View className='users-link__icon'>
                                <Image src={help} className='users-link__icon-help' />
                            </View>
                            <View className='users-link__title'>
                                <Text className='users-link__title-text'>帮助中心</Text>
                            </View>
                            <View className='users-link__arrow'>
                                <Image src={arrowRight} className='users-link__arrow--active' />
                            </View>
                        </View>
                    </Navigator>
                    <Navigator url='/pages/users/setting' className='index__Navigator'>
                        <View className='users-link__item'>
                            <View className='users-link__icon'>
                                <Image src={setting} className='users-link__icon-help' />
                            </View>
                            <View
                                className='users-link__title'
                            >
                                <Text className='users-link__title-text'>设置</Text>
                            </View>
                            <View className='users-link__arrow'>
                                <Image src={arrowRight} className='users-link__arrow--active' />
                            </View>
                        </View>
                    </Navigator >

                    {this.env === 'weapp' ? (
                        <View className='users-link__item'>
                            <View className='users-link__icon'>
                                <Image src={customer} className='users-link__icon-help' />
                            </View>
                            <View>
                                <View className='users-link__title'>
                                    <Text className='users-link__title-text'>在线客服 </Text>
                                </View>
                                <View className='users-link__subtitle'>
                                    <contact-button> </contact-button>
                                </View>
                            </View>
                            <View className='users-link__arrow'>
                                <Image src={arrowRight} className='users-link__arrow--active' />
                            </View>
                        </View>
                    ) : this.env === 'swan' ? (
                        <View className='users-link__item'>
                            <View className='users-link__icon'>
                                <Image src={customer} className='users-link__icon-help' />
                            </View>
                            <View>
                                <View className='users-link__title'>
                                    <Text className='users-link__title-text'>在线客服 </Text>
                                </View>
                                <View className='users-link__subtitle'>
                                    <button size='mini' plain open-type="contact" >客服</button>
                                </View>
                            </View>
                            <View className='users-link__arrow'>
                                <Image src={arrowRight} className='users-link__arrow--active' />
                            </View>
                        </View>
                    ) : (this.env === 'alipay' ? (
                        <View className='users-link__item'>
                            <View className='users-link__icon'>
                                <Image src={customer} className='users-link__icon-help' />
                            </View>
                            <View onClick={this.onShowContact.bind(this)}
                            >
                                <View
                                    className='users-link__title'
                                >
                                    <Text className='users-link__title-text'>客服电话</Text>
                                </View>
                                <View className='users-link__subtitle'>
                                    <Text className='users-link__subtitle-text'>400-803-4725</Text>
                                </View>
                            </View>
                            <View className='users-link__arrow'>
                                <Image src={arrowRight} className='users-link__arrow--active' />
                            </View>
                        </View>
                    ) : (null)
                            )}


                    {this.env === 'qq' ? (
                        <View className='users-link__item' onClick={this.onShareAppMessage.bind(this)}>
                            <View className='users-link__icon'>
                                <Image src={praise} className='users-link__icon-help' />
                            </View>
                            <View
                                className='users-link__title'
                            >
                                <Text className='users-link__title-text'>分享给小伙伴</Text>
                            </View>
                            <View className='users-link__subbutton--qq'>
                                <button size='mini' type='default' open-type="share" >去分享</button>
                            </View>
                            <View className='users-link__arrow'>
                                <Image src={arrowRight} className='users-link__arrow--active' />
                            </View>
                        </View >
                        // <View className='users-link__item' onClick={this.onShareAppMessage.bind(this)}>
                        //     <View className='users-link__icon'>
                        //         <Image src={praise} className='users-link__icon-help' />
                        //     </View>
                        //     <View
                        //         className='users-link__title'
                        //     >
                        //         <Text className='users-link__title-text'>分享给小伙伴</Text>
                        //     </View>
                        //     <View className='users-link__subbutton'>
                        //         <button size='mini' plain open-type="share" >去分享</button>
                        //     </View>
                        //     <View className='users-link__arrow'>
                        //         <Image src={arrowRight} className='users-link__arrow--active' />
                        //     </View>
                        // </View >
                    ) : (
                            null
                        )

                    }


                </View >
            </View >
        )
    }
}

export default Users
