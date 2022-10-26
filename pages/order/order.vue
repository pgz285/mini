<template>
	<view class="order both-center col">
		<view class="hd both-center">
			<image class="logo" src="../../static/logo1.png" mode=""></image>
		</view>
		<view class="title">訂單資料</view>
		<view class="qrcode_box both-center col">
			<view class="">
				訂單編號: BOC000090
			</view>
			<view class="code_img">
				<view class="uqrcode">
					<canvas id="qrcode" canvas-id="qrcode"
						:style="{'width': `${options.size}px`, 'height': `${options.size}px`}" />
				</view>
			</view>
			<view class="status">
				訂單狀態:
			</view>
			<view class="row hor-end">
				<view class="light">處理中</view>
				<view class="">...待取貨...</view>
				<view class="">已完成</view>
			</view>

		</view>
		<block>
			<view class="default_box">
				<view class="default_title">訂單內容</view>
				<view class="label">訂單編號: BOC000090</view>
				<view class="label">建立日期: 2022-05-30 18:30</view>
			</view>
		</block>
		<block>
			<view class="default_box">
				<view class="default_title">客戶資料</view>
				<view class="label">聯絡電話: +86 8888 8888</view>
				<view class="label">電郵地址: nginok@gmail.com</view>
			</view>
		</block>
		<block>
			<view class="default_box">
				<view class="default_title">取貨方式</view>
				<view class="label">自取</view>
				<view class="label">取貨地址: 廣東熊貓（澳門）國際旅行社</view>
			</view>
		</block>
		<block>
			<view class="default_box">
				<view class="default_title">支付方式</view>
				<view class="label">VIsa / Mastercard</view>
			</view>
		</block>
		<block>
			<view class="default_box">
				<view class="product_list default_title hor-center space-between">
					<view class="p_name">產品名稱</view>
					<view class="p_amount">數量</view>
					<view class="p_price">金額</view>
				</view>
				<view class="product_list hor-center  space-between">
					<view class="p_name">TEXT</view>
					<view class="p_amount">1</view>
					<view class="p_price">MOP 1.00</view>
				</view>
				<view class="sum">
					共1件產品
				</view>
			</view>
		</block>
		<block>
			<view class="default_box total">
				<view class="default_title">訂金金額</view>
				<view class="price_list space-between">
					<view class="label">
						原價
					</view>
					<view class="mop">
						MOP
					</view>
					<view class="price">
						MOP 25.00
					</view>
				</view>
				<view class="price_list space-between">
					<view class="label">
						運費
					</view>
					<view class="mop">
						MOP
					</view>
					<view class="price">
						MOP 25.00
					</view>
				</view>

				<view class="price_list space-between">
					<view class="label">
						訂單金額
					</view>
					<view class="mop">
						MOP
					</view>
					<view class="price">
						MOP 25.00
					</view>
				</view>
			</view>
		</block>

		<view class="footer">
			<Footer></Footer>
		</view>

	</view>
</template>

<script>
	import uqrcode from '@/components/qrcode/uqrcode.js'
	import Footer from '../../components/footer.vue'
	export default {
		components: {
			Footer
		},
		data() {
			return {
				options: {
					canvasId: 'qrcode',
					size: 200,
					margin: 10,
					text: 'BOC000090'
				}
			}
		},
		onReady() {
			this.make(this.options.text)
		},
		methods: {
			make(options) {
				return uqrcode.make(Object.assign(this.options, options), this)
			}
		}
	}
</script>

<style scoped>
	.order {
		width: 100%;
		background: #f9f9f9;
		color: #3d3d3d;
		box-sizing: border-box;
	}

	.hd {
		width: 100%;
		height: 40px;
		background: #ECECEC;
	}

	.logo {
		width: 100px;
		height: 30px;
	}

	.code_img {
		width: 200px;
		height: 200px;
		margin: 10px 0 20px 0;
	}

	.title {
		font-size: 18px;
		font-weight: bold;
		padding: 15px 0;
	}

	.light {
		font-size: 26px;
		color: #EFAA00;
	}

	.qrcode_box {
		width: calc(100% - 30px);
		background: #fff;
		border-radius: 10px;
		padding: 12px 0 20px 0;
		box-sizing: border-box;
		box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.06);
	}

	/* default_box */
	.default_box {
		margin-top: 20px;
		width: calc(100% - 30px);
		background: #fff;
		border-radius: 10px;
		padding: 12px 15px 12px 15px;
		box-sizing: border-box;
		box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.06);
	}

	.default_title {
		font-weight: bold;
		margin-bottom: 8px;
	}

	.total {
		margin-bottom: 50px;
	}

	.p_name {
		width: 45%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.p_amount {
		width: 15%;
	}

	.p_price {
		width: 40%;
		text-align: right;
	}

	.sum {
		padding: 5px 0;
	}

	.footer {
		width: 100%;
	}
</style>
