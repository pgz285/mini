<template>
	<Popup ref="popup" type="center" bgColor="none" maskAlpha="0.8" negativeTop="80" width="100%" radius="6">
		<view class="popup-content both-center">
			<view class="content both-center col">
				<view class="both-center col" style="width:100%" @click.stop="doDialog">
					<view class="title text-overflow2" :style="{color: color}">
						{{info.name[0].text}}
					</view>
					<block v-if="info.images.length==1">
						<image class="img" :src="info.images[0].url" mode="aspectFill"></image>
					</block>
					<block v-else>
						<swiper class="swiper" circular indicator-color="#fbe8ea" indicator-active-color="#CE3C45"
							:indicator-dots="true" :autoplay="false" :interval="2000" :duration="500">
							<swiper-item v-for="(item, index) in info.images" :key="index">
								<view class="swiper-item">
									<image class="img" :src="item.url" mode="aspectFill"></image>
								</view>
							</swiper-item>
						</swiper>
					</block>

					<view class="label" v-html="info.description[0].text"></view>
				</view>

				<view class="close" @click="close()" :style="{background: buttonColor}">
					關閉
				</view>
			</view>
		</view>
	</Popup>

	</view>
</template>

<script>
	import Popup from './wyb-popup/wyb-popup.vue'
	export default {
		name: "detail_popup",
		components: {
			Popup
		},
		data() {
			return {
				color: '',
				buttonColor:''
			};
		},
		props: {
			info: Object
		},
		mounted() {
			this.color = this.$store.state.Color.themeColor
			this.buttonColor = this.$store.state.Color.buttonColor

			this.$nextTick(function() {
				this.$on('open', function() {
					this.$refs.popup.show()
				});
			});
		},
		methods: {
			close() {
				this.$refs.popup.hide()
			},
			open() {
				this.$refs.popup.show() // 显示
			}
		}
	}
</script>

<style scoped>
	.popup-content {
		width: 100%;
	}

	.content {
		width: calc(100vw - 60px);
		padding: 15px;
		background-color: #f2f2f2;
		border-radius: 2px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title {
		font-family: DINPro-Medium;
		font-size: 18px;
		color: #CE3C45;
		letter-spacing: -0.95px;
		font-weight: 500;
		margin-bottom: 10px;
		width: 100%;
		text-align: center;
	}


	.swiper,
	.img {
		width: 100%;
		height: 153px;
		overflow: hidden;
		object-fit: cover;
	}

	.label {
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #9CA1AE;
		letter-spacing: -0px;
		line-height: 20px;
		font-weight: 400;
		padding: 10px 0;
	}

	.close {
		background: #CE3C45;
		font-size: 18px;
		padding: 3px 10px;
		color: #f2f2f2;
		border-radius: 2px;
	}
</style>
