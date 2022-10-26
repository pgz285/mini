<template>
	<view class="">
		<view class="contain">
			<view class="contain-box">
				<view class="contain-title">
					訂單內容
				</view>
				<view class="contain_list space-between contain_line">
					<view class="">
						TEST03 X 1
					</view>
					<view class="price">
						MOP 25.00
					</view>
				</view>
				<view class="sum">
					共1件產品
				</view>
			</view>
		</view>
		<Total></Total>
		<view class="contain">
			<view class="contain-box">
				<view class="contain-title">
					訂單備註
				</view>
				<view class="textarea">
					<textarea name="" v-model="notes" id="" cols="30" rows="10" placeholder="輸入備註"></textarea>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import Total from './total.vue'
	export default {
		name: "summary",
		components: {
			Total
		},
		data() {
			return {
				notes: ''
			};
		},
		mounted() {
			this.$nextTick(function() {
				this.$on('saveNotes', function() {
					uni.setStorage({
						key: 'notes',
						data: this.notes,
					});
				});
				this.notes = uni.getStorageSync('notes') || '';
			});
		},
		methods: {
			saveNotes() {
				uni.setStorage({
					key: 'notes',
					data: this.notes,
				});
			}
		}
	}
</script>

<style scoped>
	.sum {
		font-size: 14px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0.25em;
		color: #CE3C45;
	}

	.textarea {
		border: 1px solid #eee;
		font-size: 14px;
		height: 90px;
		font-weight: normal;
		border-radius: 4px;
		margin: 12px 0;
		text-indent: 2px;
	}

	textarea {
		padding: 6px;
		height: 90px;
	}
</style>
