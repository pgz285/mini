<template>
	<view class="both-center col">
		<view class="contain">
			<view class="contain-box">
				<view class="row ">
					<view class="contain-title">
						訂單內容
					</view>
					<view class="red">
						(只接受澳門中銀信用卡)
					</view>
				</view>
				<view class="radio_box space-between">
					<view class="row hor-center type" @click="tab(0)">
						<view class="radio both-center">
							<view v-if="type==0" class="center">

							</view>
						</view>
						<view class="list both-center">
							<image class="icon" src="../../static/svg/unionPay.svg" mode=""></image>
							<image class="icon" src="../../static/svg/unionPay.svg" mode=""></image>
						</view>
					</view>
					<view class="row hor-center type" @click="tab(1)">
						<view class="radio both-center">
							<view v-if="type==1" class="center">

							</view>
						</view>
						<view class="list both-center">
							<image class="icon" src="../../static/svg/visa.svg" mode=""></image>
							<image class="icon" src="../../static/svg/visa.svg" mode=""></image>
						</view>
					</view>
				</view>


			</view>
		</view>
		<Total></Total>


		<view class="row verify hor-center">
			<view class="hor-center input">
				<input type="text" @input="onKeyInput" maxlength="4" placeholder="請輸入驗證碼">
			</view>
			<view class="both-center">
				<Verify></Verify>
			</view>

		</view>


	</view>

</template>

<script>
	import Total from './total.vue'
	import Verify from '../verify_code.vue'
	export default {
		name: "payment_method",
		components: {
			Total,
			Verify

		},
		data() {
			return {
				type: 0,
				code: ''
			};
		},
		methods: {
			tab(e) {
				this.type = e
			},
			onKeyInput: function(event) {
				var that = this
				this.code = event.target.value

				if (this.code.length == 4) {
					if (this.code.toLowerCase() === uni.getStorageSync('imgcode').toLowerCase()) {
						uni.showToast({
							icon: 'none',
							title: '驗證通過',
						})
						setTimeout(function() {
							that.$emit('tab')
						}, 400);

					} else {
						uni.showToast({
							icon: 'none',
							title: '驗證碼錯誤',
						})
						return
					}
				}
			},
		}
	}
</script>

<style scoped>
	.red {
		color: #FF162A;
		margin-left: 10px;
	}

	.radio_box {
		margin: 15px 0;
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

	.icon {
		width: 60px;
		height: 30px;
	}

	.verify {
		width: calc(100% - 30px);
		margin: 20px 0 30px 0;
		background: #fff;
		border-radius: 5px;
		height: 50px;
	}

	.verify .input {
		width: calc(100% - 160px);
		height: 45px;
	}

	input {
		width: 100%;
		height: 45px;
		padding-left: 20px;
		font-size: 16px;
		color: #3D3D3D;
		letter-spacing: 0.15em !important;
	}
</style>
