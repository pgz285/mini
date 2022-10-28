<template>
	<view class="card">
		<view class="top relative">
			<!-- <image class="img" :src="arr.images[0].url" mode="aspectFill"></image> -->
			<lazyLoad :src="arr.images[0].url" class="img" height="153px" borderRadius="8px 8px 0 0" mode="aspectFill"></lazyLoad>

			<view class="blur space-between hor-center"
				:style="{background:'linear-gradient(180deg, transparent, '+color+' 120%)'}">
				<view class="title">
					{{arr.name[0].text}}
				</view>
				<view class="detail both-center row" @click="open(arr)">
					詳情 <image class="icon" src="../static/detail.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="price row hor-end">
			<block v-if="arr.special_price == null">
				<view class="red hor-center" :style="{color: color}">
					<span class="mop hor-center" :style="{color: color}"> MOP</span> {{arr.price}}
				</view>
			</block>
			<block v-else>
				<view class="red hor-center" :style="{color: color}">
					<span class="mop hor-center" :style="{color: color}"> MOP</span> {{arr.special_price}}
				</view>
				<view class="grey hor-end">
					MOP {{arr.price}}
				</view>
			</block>

		</view>
		<view class="select space-between hor-center">
			<view class="label">
				選擇用餐日期
			</view>
			<view class="right row">
				<view class="reduce both-center" :class="{'opacity': sum==0}" :style="{background: buttonColor}"
					@click="reduce()">
					<image class="select-icon" src="../static/svg/reduce.svg" mode=""></image>
				</view>
				<view class="count relative both-center" :class="{'black' : sum!=0}">
					{{sum}}
					<view class="bg" :style="{background: buttonColor}">

					</view>
				</view>
				<view class="add both-center" @click="add()" :style="{background: buttonColor}">
					<image class="select-icon" src="../static/svg/add.svg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import lazyLoad from '@/uni_modules/muqian-lazyLoad/components/muqian-lazyLoad/muqian-lazyLoad.vue'
	export default {
		name: "product_card",
		components:{
			lazyLoad
		},
		props: {
			arr: Object
		},
		data() {
			return {
				sum: 0,
				color: '#ce3c45',
				buttonColor: ''
			};
		},
		mounted() {
			this.color = this.$store.state.Color.themeColor
			this.buttonColor = this.$store.state.Color.buttonColor
		},
		methods: {
			open(e) {
				this.$emit('show', e)
			},
			add() {
				uni.vibrateShort({
					success: function() {

					}
				});
				this.sum += 1
			},
			reduce() {
				if (this.sum == 0) return;
				uni.vibrateShort({
					success: function() {

					}
				});
				this.sum -= 1
			}
		}
	}
</script>

<style scoped>
	.card,
	.top {
		width: 100%;
	}

	.card {
		margin-bottom: 20px;
	}

	.top {
		height: 153px;
	}

	.img {
		width: 100%;
		height: 153px;
		overflow: hidden;
		border-radius: 8px 8px 0 0;
		object-fit: cover;
	}

	.blur {
		position: absolute;
		bottom: 0;
		height: 50px;
		width: 100%;
		padding: 0 15px;
		box-sizing: border-box;
		/* background: linear-gradient(180deg, transparent, #ce3c45 120%); */
	}

	.title {
		height: 22px;
		font-family: PingFangTC-Medium;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		font-weight: 500;
		width: 70%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.detail {
		width: 40px;
		padding: 4px 4px;
		background: rgba(172, 159, 159, 0.50);
		border-radius: 3px;
		font-family: PingFangTC-Regular;
		font-size: 12px;
		color: #FFFFFF;
		letter-spacing: 0;
		font-weight: 400;
	}

	.price {
		padding: 12px 15px;
		background: #fff;
		border-bottom: 1px solid #F0F0F0;
		;
	}

	.mop {
		height: 24px;
		font-family: PingFangTC-Regular;
		font-size: 14px;
		color: #CE3C45;
		letter-spacing: -0.67px;
		font-weight: 400;
		margin-right: 5px;
	}

	.red {
		height: 24px;
		font-family: DINPro-Bold;
		font-size: 24px;
		color: #CE3C45;
		letter-spacing: -1.14px;
		font-weight: 700;
	}

	.grey {
		height: 24px;
		font-family: DINPro-Regular;
		font-size: 14px;
		color: #9CA1AE;
		letter-spacing: 0;
		text-decoration: line-through;
		font-weight: 400;
		margin-left: 20px;
	}

	.icon {
		width: 15px;
		height: 20px;
	}



	/* select */
	.select {
		padding: 12px 15px;
		background: #fff;
		border-radius: 0 0 8px 8px;
	}

	.select-icon {
		width: 20px;
		height: 20px;
	}

	.label {
		height: 21px;
		font-family: PingFangTC-Regular;
		font-size: 15px;
		color: #3A84F6;
		letter-spacing: -0px;
		text-align: center;
		font-weight: 400;
	}

	.right {
		width: 112px;
		height: 30px;
		border-radius: 4px;
		color: #9CA1AE;
	}

	.black {
		color: #535455 !important;
	}

	.opacity {
		opacity: 0.5;
		background: #C92D41;
	}

	.reduce {
		width: 30px;
		height: 30px;
		background: #C92D41;
		color: #FDF5F5;
		font-weight: bold;
		font-size: 26px;
		border-radius: 4px 0 0 4px;
	}

	.count {
		width: 52px;
		height: 30px;
		font-family: DINPro-Regular;
		font-size: 16px;
		color: #9CA1AE;
		letter-spacing: -0.76px;
		font-weight: 400;
	}

	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 52px;
		height: 30px;
		opacity: .1;
	}

	.add {
		width: 30px;
		height: 30px;
		background: #C92D41;
		color: #FDF5F5;
		font-size: 26px;
		font-weight: bold;
		border-radius: 0 4px 4px 0;
	}
</style>
