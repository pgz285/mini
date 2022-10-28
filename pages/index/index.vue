<template>
	<view class="content">
		<view class="hd">
			<swiper class="swiper" circular indicator-color="#fbe8ea" :indicator-active-color="color"
				:indicator-dots="true" :autoplay="false" :interval="2000" :duration="500">
				<swiper-item v-for="(item,index) in  banner" :key="index">
					<view class="swiper-item">
								<image class="img" :src="item.url" mode="aspectFill"> </image>
						<!-- <lazyLoad :src="item.url" class="img" height="250px" mode="aspectFill"></lazyLoad> -->
					</view>
				</swiper-item>
			</swiper>

			<view class="blur" :style="{backgroundImage: 'linear-gradient('+ color +', transparent)'}"></view>
			<view class="search space-between">
				<image class="logo" :src="info.store_info.logo"> </image>
				<view class="right space-between">
					<view class="">
						請搜索...
					</view>
					<image class="icon" src="../../static/search.svg" alt=""> </image>
				</view>
			</view>
		</view>

		<view class="list col">
			<view class="both-center col" v-if="arr.length==0">
				<image class="null" src="../../static/svg/null.svg" mode=""></image>
				<view class="tip">
					暫無相關產品
				</view>
			</view>
			<view v-else>
				<block v-for="(item,index) in arr" :key="index">
					<List :arr="item" @show="showPopup"></List>
				</block>
			</view>


			<view class="view-more relative both-center"  v-if="arr.length!=0" :style="{color: buttonColor}">
				<view class="">
					展示更多
				</view>
				<view class="">
					↓
				</view>
				<view class="bg" :style="{background: buttonColor}">

				</view>
			</view>
		</view>
		<view class="">
			<Summary></Summary>
		</view>
		<view class="footer">
			<Footer></Footer>
		</view>

		<view class="popup hor-center">
			<Popup ref="popups" :info="popupInfo"></Popup>
		</view>
	</view>
</template>

<script>
	import List from '../../components/product_card.vue'
	import Footer from '../../components/footer.vue'
	import Summary from '../../components/index_summary.vue'

	import Popup from '@/components/detail_popup.vue'
	import lazyLoad from '@/uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.vue'

	export default {
		components: {
			List,
			Footer,
			Summary,
			Popup,
			lazyLoad
		},
		data() {
			return {
				title: 'Hello',
				popupInfo: {},
				color: '',
				buttonColor: '',
				banner: [],
				info: [],
				arr: []
			}
		},
		mounted() {
			this.color = this.$store.state.Color.themeColor
			this.buttonColor = this.$store.state.Color.buttonColor
			this.getData()
			this.getProduct()
		},
		methods: {
			showPopup(e) {
				this.popupInfo = e
				this.$refs.popups.$emit("open")
			},
			getData() {
				this.$request('store-service/config/host/demo.shoppoint.online', {}, 'GET').then(res => {
					// 打印调用成功回调
					console.log(res)
					this.info = res
					this.banner = res.banners
				})
			},
			getProduct() {
				uni.showLoading({
					title: '加載中'
				})
				this.$request('product-service/category-product/demostore', {}, 'GET').then(res => {
					// 打印调用成功回调
					console.log(res.products)
					this.arr = res.products
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		background: #efefef;
	}

	.hd {
		width: 100%;
		height: 250px;
		background: #efefef;
		position: relative;
	}

	.swiper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 250px;
		z-index: 1;
	}

	.img {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}

	.blur {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 160px;
		background-image: linear-gradient(#ce3c45, transparent);
		z-index: 2;
	}

	.search {
		height: 36px;
		width: calc(100vw - 30px);
		background: #fff;
		position: absolute;
		top: 100px;
		left: 15px;
		border-radius: 6.5px;
		z-index: 3;
	}

	.logo {
		width: 125px;
		height: 36px;
		border-radius: 6.5px 0 0 6.5px;
	}

	.right {
		width: calc(100% - 125px);
		padding: 8px;
		height: 20px;
		font-size: 14px;
		color: #7F8C9A;
		letter-spacing: 0;
		font-weight: 400;
	}

	.icon {
		width: 20px;
		height: 20px;
	}

	.list {
		width: calc(100% - 30px);
		padding: 20px 15px;
	}

	.view-more {
		height: 38px;
		border-radius: 4px;
		font-family: PingFangTC-Regular;
		font-size: 14px;
		color: #E87685;
		letter-spacing: 0;
		font-weight: 400;
	}

	.popup {
		width: 100%;
		box-sizing: border-box;
	}

	.bg {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		height: 38px;
		opacity: 0.05;
		border-radius: 4px;
	}
	.null{
		padding: 30px 0;
		width: 120px;
		height: 120px;
	}
	.tip{
		color: #7F8C9A;
	}
</style>
