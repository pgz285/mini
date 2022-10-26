<template>
	<view class="">
		<view class="contain">
			<view class="contain-box">
				<view class="contain-title">
					取貨方式
				</view>
				<view class="col radio-box">
					<view class="row hor-center type" @click="tab(0)">
						<view class="radio both-center">
							<view v-if="type==0" class="center">

							</view>
						</view>
						<view class="">
							親臨門店自取
						</view>
					</view>
					<view class="select-box relative hor-center" v-if="type==0">
						<picker mode="selector" @change="bindPickerChange" :value="index" :range="array">
							<view class="label">{{array[index]}}</view>
						</picker>
						<image class="icon" src="../../static/svg/arrow_down.svg" mode=""></image>
					</view>
				</view>
				<view class="col radio-box">
					<view class="row hor-center type" @click="tab(1)">
						<view class="radio both-center">
							<view v-if="type==1" class="center">

							</view>
						</view>
						<view class="">
							送貨
						</view>
					</view>
					<Transition :typeList="typeList" :isContentShow="type==1">
						<block v-if="type==1">
							<view class="select-box clear relative hor-center">
								<picker mode="selector" @change="bindPickerChange" :value="index" :range="array">
									<view class="label">{{array[index]}}</view>
								</picker>
								<image class="icon" src="../../static/svg/arrow_down.svg" mode=""></image>
							</view>
							<view class="select-box clear relative hor-center">
								<picker mode="selector" @change="bindPickerChange" :value="index" :range="array">
									<view class="label">{{array[index]}}</view>
								</picker>
								<image class="icon" src="../../static/svg/arrow_down.svg" mode=""></image>
							</view>
							<view class="address">
								<input type="text" placeholder="收件人地址">
							</view>

							<view class="reciver">
								<view class="reciver_title">
									收件人資料
								</view>
								<view class="row hor-center" @click="copyInfo()">
									<view class="check both-center">
										<view v-if="copy" class="block">

										</view>
									</view>
									<view class="">
										與客戶資料相同
									</view>
								</view>
								<view class="name">
									<input type="text" placeholder="收件人姓名" v-model="customerInfo.name">
								</view>
								<view class="space-between area hor-center">
									<view class="ared_code hor-center relative">
										<picker mode="selector" @change="bindPickerChange" :value="index"
											:range="array2">
											<view class="label ">{{array2[index]}}</view>
										</picker>
										<image class="icon" src="../../static/svg/arrow_down.svg" mode=""></image>
									</view>
									<view class="number">
										<input type="text" placeholder=" " v-model="customerInfo.number">
									</view>
								</view>

							</view>
						</block>
					</Transition>

				</view>
			</view>
		</view>
		<Total></Total>
	</view>

</template>

<script>
	import Transition from '../wyb-transition/wyb-transition.vue'
	import Total from './total.vue'
	export default {
		name: "receive_way",
		components: {
			Total,
			Transition
		},
		onLoad() {
			this.tab(0)
		},
		data() {
			return {
				array: ['🇲🇴 澳門旗艦店', '🇨🇳 中國大陸店'],
				array2: ['🇲🇴 +853', '🇨🇳 +86'],
				index: 0,
				type: 0,
				copy: false,
				typeList: ['fade', 'slide-up'],
				customerInfo: {
					name: '',
					areaCodeIndex: '',
					number: '',
					email: ''
				}
			};
		},
		mounted() {

		},
		methods: {
			tab(e) {
				this.type = e
			},
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
			copyInfo() {
				var that = this
				this.copy = !this.copy

				if (this.copy) {
					uni.showLoading({
						title: '同步中'
					})
					setTimeout(function() {
						uni.hideLoading()
						that.customerInfo = uni.getStorageSync('customerInfo') || that.customerInfo
						that.index = that.customerInfo.areaCodeIndex || 0
					}, 500);
				}
			}
		}
	}
</script>

<style scoped>
	.contain-box {
		padding-bottom: 30px;
	}

	.radio-box {
		color: #CE3C45;
		font-size: 15px;
	}

	.radio {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 2px solid #CE3C45;
		background: #fff;
		margin-right: 5px;
	}

	.center {
		width: 12px;
		height: 12px;
		background: #CE3C45;
		border-radius: 50%;
	}

	.select-box {
		margin: 8px 0;
		width: 180px;
		height: 30px;
		border-radius: 5px;
		background: #FFFFFF;
		box-sizing: border-box;
		border: 1px solid #D8D8D8;
	}

	.clear {
		margin: 5px 0;
	}

	picker {
		padding-left: 8px;
		width: 180px;
		color: #3d3d3d;
	}


	.type {
		margin: 10px 0;
	}

	.label {
		width: 180px;
		padding-right: 25px;
		overflow: hidden !important;
		white-space: nowrap !important;
		text-overflow: ellipsis !important;
		box-sizing: border-box !important;
	}

	.icon {
		position: absolute;
		right: 8px;
		width: 15px;
		height: 15px;
		pointer-events: none !important;
	}

	input,
	.area {
		width: 100%;
		height: 30px;
		border-radius: 5px;
		background: #FFFFFF;
		border: 1px solid #D8D8D8;
		padding-left: 5px;
		color: #3d3d3d;
		box-sizing: border-box;
	}

	.address {
		margin: 5px 0;
		width: 100%;
		height: 30px;
		background: #FFFFFF;
		padding-bottom: 10px;
		border-bottom: 1px solid #D8D8D8;
	}

	.name {
		margin: 5px 0;
		width: 100%;
		height: 30px;
		background: #FFFFFF;
		padding-bottom: 10px;
	}


	/* reciver */
	.reciver {
		padding: 15px 0;
		font-size: 13px;
	}

	.reciver_title {
		font-size: 15px;
	}

	.check {
		width: 18px;
		height: 18px;
		border: #CE3C45 2px solid;
		border-radius: 3px;
		margin: 10px 10px 10px 0;
	}

	.block {
		width: 12px;
		height: 12px;
		background: #CE3C45;
		border-radius: 2px;

	}

	.area {
		padding: 0;
	}

	.area input {
		width: 100%;
		border: none;
		height: 28px;
	}

	.ared_code {
		width: 80px;
		color: #3d3d3d;
		font-size: 14px;
	}

	.ared_code picker {
		width: 80px;
	}

	.ared_code .label {
		width: 75px;
		padding-right: 10px;
	}

	.ared_code .icon {
		right: 0;
	}

	.number {
		width: calc(100% - 90px);
	}
</style>
