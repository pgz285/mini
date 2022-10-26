<template>
	<view class="">
		<view class="contain">
			<view class="contain-box">
				<view class="contain-title">
					客戶資料
				</view>
				<block class="">
					<view class="contain_list space-between contain_line hor-center">
						<view class="left">
							姓名 <span class="require">*</span>
						</view>
						<input class="input" v-model="customerInfo.name" type="text" placeholder="輸入姓名">
					</view>
					<view class="contain_list clear space-between ">
						<view class="left">

						</view>
						<view class="red">
							必填
						</view>
					</view>
				</block>
				<block class="">
					<view class="contain_list space-between contain_line hor-center">
						<view class="left">
							聯絡電話 <span class="require">*</span>
						</view>
						<view class="input row hor-center">
							<view class="relative area hor-center">
								<picker mode="selector" @change="bindPickerChange" :value="index" :range="array">
									<view>{{array[index]}}</view>
								</picker>
								<image class="icon" src="../../static/svg/down.svg" mode=""></image>
							</view>

							<input type="number" v-model="customerInfo.number" placeholder="輸入手機號碼">
						</view>

					</view>
					<view class="contain_list  clear space-between ">
						<view class="left">

						</view>
						<view class="red">
							必填
						</view>
					</view>
				</block>
				<block class="">
					<view class="contain_list space-between contain_line hor-center">
						<view class="left">
							電郵 <span class="require">*</span>
						</view>
						<input class="input" v-model="customerInfo.email" type="text" placeholder="輸入電郵">
					</view>
					<view class="contain_list clear space-between ">
						<view class="left">

						</view>
						<view class="red">
							必填
						</view>
					</view>
				</block>

			</view>
		</view>
		<Total></Total>

	</view>

</template>

<script>
	import Total from '../form/total.vue'
	export default {
		name: "customer_info",
		components: {
			Total
		},
		data() {
			return {
				array: ['+853', '+86'],
				index: 0,
				customerInfo: {
					name: '',
					areaCodeIndex: '',
					number: '',
					email: ''
				}

			};
		},
		mounted() {
			this.$nextTick(function() {
				this.$on('saveCustomerInfo', function() {
					uni.setStorage({
						key: 'customerInfo',
						data: {
							name: this.customerInfo.name,
							areaCodeIndex: this.index,
							number: this.customerInfo.number,
							email: this.customerInfo.email
						}
					});
				});
				this.customerInfo = uni.getStorageSync('customerInfo') || this.customerInfo
				this.index = this.customerInfo.areaCodeIndex || 0
			});
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
		}
	}
</script>

<style scoped>
	.left {
		width: 27%;
	}

	.contain_list {
		height: 35px;
		line-height: 35px;
	}

	.red {
		width: 65%;
		color: #D30A17;
		font-size: 13px;
		font-family: 'PingFangSC-Regular';
		font-weight: normal;
	}

	.require {
		color: #D30A17;
		padding-left: 3px;
	}

	.input {
		width: 65%;
	}

	.clear {
		height: 25px;
		line-height: 25px;
		margin: -5px 0 0 0;
	}

	picker,
	.area {
		width: 60px;
		margin-right: 5px;
	}

	.icon {
		position: absolute;
		right: 10px;
		width: 12px;
		height: 12px;
		pointer-events: none;
	}
</style>
