<template>
	<view class="footer relative" >
		<view class="label col stgap">
			<ul>
				<li>電話:{{info.phone_no}}</li>
				<li>WhatsApp:{{info.whatsapp}}</li>
				<li>微信:{{info.wechat}}</li>
				<li>電郵:{{info.email}}</li>
				<li>地址:{{info.address[0].text}}</li>
				<li>Copyright © 2022 BOC FLASH SALE.All Rights Reserved.</li>
			</ul>
		</view>
		<view class="arrow both-center" @click="backTop()">
			<image class="arrow_up" src="../static/svg/arrow_up.svg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "footer",
		data() {
			return {
				color:'',
				info:[],
			};
		},
		mounted() {
			this.color = this.$store.state.Color.themeColor
			this.getData()
		},
		methods: {
			backTop() {
				uni.vibrateShort({
					success: function() {}
				});
				uni.pageScrollTo({
					scrollTop: 0
				});
			},
			getData() {
				let infos = uni.getStorageSync('infos')

					this.info = infos.store_info
			}
		}
	}
</script>

<style scoped>
	.footer {
		width: 100%;
		background: #AF1B2E;
	}

	.label {
		height: auto;
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		padding: 25px 25px 0 25px;
		color: #FFEBEE;
		letter-spacing: -0px;
		font-weight: 400;
	}

	li {
		margin-bottom: 10px;
	}

	.arrow {
		width: 40px;
		height: 40px;
		position: absolute;
		top: 30px;
		right: 20px;
	}

	.arrow_up {
		width: 18px;
		height: 18px;
	}
</style>
