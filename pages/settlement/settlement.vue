<template>
	<view class="main">
		<view class="hd both-center">
			這是測試網站
		</view>
		<view class="brand both-center">
			<image class="logo" src="../../static/logo1.png" mode=""></image>
		</view>
		<view class="stepBar row both-center">
			<view class="step" :class="{'bold': step==0}">
				訂單總匯
			</view>
			<view class="step" :class="{'bold': step==1}">
				客戶資料
			</view>
			<view class="step" :class="{'bold': step==2}">
				取貨方式
			</view>
			<view class="step" :class="{'bold': step==3}">
				付款方式
			</view>
		</view>

		<Step0 v-if="step==0" ref="step0"></Step0>

		<Step1 v-if="step==1" ref="step1"></Step1>

		<Step2 v-if="step==2" ref="step2"></Step2>

		<Step3 v-if="step==3" ref="step3" @tab="verify()"></Step3>

		<view class="space-between bnt">
			<view class="back_button both-center" @click="back()">
				返回
			</view>
			<view v-if="step<=2" class="default-button both-center" :style="{background: color}" @click="next()">
				下一步
			</view>
			<view class="default-button both-center" :class="{'disverify': !verifyOk}" @click="pay()" v-else>
				確認付款
			</view>
		</view>
		<Footer></Footer>
	</view>
</template>

<script>
	import Step0 from '../../components/form/summary.vue'
	import Step1 from '../../components/form/customer_info.vue'
	import Step2 from '../../components/form/receive_way.vue'
	import Step3 from '../../components/form/payment_method.vue'
	import Footer from '../../components/footer.vue'
	export default {
		components: {
			Step0,
			Step1,
			Step2,
			Step3,
			Footer
		},
		data() {
			return {
				step: 0,
				verifyOk: false,
				color: ''
			}
		},
		mounted() {
			this.color = this.$store.state.Color.buttonColor
		},
		methods: {
			tab(e) {
				this.step = e
			},
			back() {
				if (this.step == 0) {
					uni.clearStorage()

					uni.navigateBack({
						delta: 1
					})
				} else {
					this.step -= 1
				}
			},
			next() {
				switch (this.step) {
					case 0:
						this.step += 1
						this.$refs.step0.$emit('saveNotes')
						break;

					case 1:
						this.step += 1
						this.$refs.step1.$emit('saveCustomerInfo')
						break;
					default:
						this.step += 1
						break;
				}
			},
			// 滑動驗證通過，可以確認付款
			verify() {
				this.verifyOk = true
			},
			pay() {
				if (!this.verifyOk) {
					uni.showToast({
						icon: 'error',
						title: '請先完成驗證'
					})
					return
				} else {
					uni.navigateTo({
						url:'/pages/order/order'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.main {
		width: 100%;
		height: 100%;
		min-height: 100vh;
		background: #efefef;
	}

	.hd {
		width: 100%;
		height: 35px;
		background: rgba(255, 122, 4, 0.1);

		font-size: 14px;
		font-weight: normal;
		line-height: 35px;
		letter-spacing: 0px;
		color: #D86356;
	}

	.brand {
		width: 100%;
		padding: 10px 0;
	}

	.logo {
		width: 125px;
		height: 36px;
	}

	.stepBar {
		font-size: 16px;
		font-weight: normal;
		line-height: 34px;
		letter-spacing: 0em;
		color: #545557;
		margin-bottom: 10px;
	}

	.step {
		padding: 0 8px;
	}

	.bold {
		font-weight: bold;
		color: #3D3D3D;
	}

	.bnt {
		width: 100%;
		padding: 10px 15px 30px 15px;
		box-sizing: border-box;
	}

	.disverify {
		opacity: .4;
		/* pointer-events: none; */
	}
</style>
