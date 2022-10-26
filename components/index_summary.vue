<template>
	<view class="summary">
		<view class="summary-box">
			<view class="space-between sub">
				<view class="sub-title">
					數量
				</view>
				<view class="price" :style="{color: buttonColor}">
					10
				</view>
			</view>
			<view class="space-between sub">
				<view class="sub-title">
					總價
				</view>
				<view class="price hor-center" :style="{color: buttonColor}">
					<span class="type" :style="{color: buttonColor}">mop</span> 9999.99
				</view>
			</view>
			<view class="label row hor-center">
				<view class="unselect both-center" :class="{'select' : agree}"  @click="change()">
					<image class="icon" src="../static/svg/select.svg" mode=""></image>
				</view>
				本人清楚及了解網站的
				<view class="popup" @click="open()"  >
					條款細則
				</view>和
				<view class="popup" @click="open()">
					隱私政策
				</view>
			</view>
			<view class="settlement both-center" :style="{ background: agree ? buttonColor : '#E1E1E1' }" @click="settlement()">
				結算
			</view>
		</view>

		<Popup ref="popups"></Popup>
	</view>
</template>

<script>
	import Popup from '@/components/clause_popup.vue'
	export default {
		name: "index_summary",
		components: {
			Popup
		},
		data() {
			return {
				agree: false,
				color: '',
				buttonColor:''
			};
		},
		mounted() {
			this.color = this.$store.state.Color.themeColor
			this.buttonColor = this.$store.state.Color.buttonColor
		},
		methods: {
			change() {
				this.agree = !this.agree
			},
			settlement() {
				if (!this.agree) {
					uni.showToast({
						icon: 'none',
						title: '請先同意網站的相關條款'
					})
				} else {
					uni.navigateTo({
						url: '/pages/settlement/settlement'
					})
				}
			},
			open() {
				this.$refs.popups.$emit("open")
			},
		}
	}
</script>

<style scoped>
	.summary {
		margin-top: 15px;
		background: #fff;
	}

	.summary-box {
		padding: 20px 35px 40px 35px;
	}

	.unselect {
		width: 16px;
		height: 16px;
		background: #E1E1E1;
		border-radius: 2px;
		margin-right: 5px;
	}

	.select {
		background: #CE3C45;
	}

	.sub {
		padding: 15px 0;
		border-bottom: 1px solid #F2F2F2;
	}

	.icon {
		width: 14px;
		height: 9px;
	}

	.sub-title {
		height: 21px;
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #6A6D71;
		letter-spacing: 0;
		font-weight: 400;
	}

	.type {
		height: 20px;
		font-family: PingFangTC-Regular;
		font-size: 14px;
		color: #CE3C45;
		letter-spacing: -0.67px;
		font-weight: 400;
		margin-right: 8px;
	}

	.price {
		height: 25px;
		font-family: DINPro-Medium;
		font-size: 20px;
		color: #CE3C45;
		letter-spacing: -0.95px;
		font-weight: 500;
	}

	.label {
		height: 20px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #9CA1AE;
		letter-spacing: -0px;
		line-height: 40px;
		font-weight: 400;
		margin-top: 15px;
	}

	.popup {
		color: #C92D41;
	}

	.settlement {
		width: 100%;
		height: 48px;
		background: #E1E1E1;
		font-family: PingFangSC-Regular;
		font-size: 17px;
		color: #FFFFFF;
		letter-spacing: 3px;
		text-align: center;
		font-weight: 400;
		border-radius: 5px;
		margin-top: 30px;
	}

	.settlementOK {
		background: #CE3C45;
	}
</style>
