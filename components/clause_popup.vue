<template>
	<Popup ref="clausePopup" type="bottom" maskAlpha="0.8" mode="size-fixed" negativeTop="80" scrollY="true" width="100%" height="900"
		radius="6">
		<view class="space-between top hor-center">
			<view class="red">
				條款細則
			</view>
			<view class="close" @click="close()">
				<image class="icon" src="../static/svg/close.svg" mode=""></image>
			</view>
		</view>
		<view class="contain_box both-center">
			<view class="contain">
				用户承诺以其真实身份注册成为平台的用户，并保证所提供的个人身份资料信息真实、完整、有效，依据法令规定和本协议约定对所提供的信息承担相应的法律责任。智炫堂公司有权审查用户注册所提供的身份信息是否真实、有效。用户以其真实身份注册成为平台用户后，需要修改所提供的个人身份资料信息的，智炫堂公司应当及时、有效地为其提供该项服务。
				4.2
				在用户完成注册程序并收到一个密码及账号后，用户应维持密码及账号的机密安全。您应对任何人利用您的密码及账号所进行的活动负完全的责任，智炫堂公司对非法或未经您授权使用您账号及密码的行为不承担任何责任。智炫堂公司应积极地采取技术与管理等合理措施保障用户账号的安全、有效。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给用户和他人的民事权利造成损害的，应当承担由此产生的法律责任。
			在用户完成注册程序并收到一个密码及账号后，用户应维持密码及账号的机密安全。您应对任何人利用您的密码及账号所进行的活动负完全的责任，智炫堂公司对非法或未经您授权使用您账号及密码的行为不承担任何责任。智炫堂公司应积极地采取技术与管理等合理措施保障用户账号的安全、有效。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给用户和他人的民事权利造成损害的，应当承担由此产生的法律责任。
			在用户完成注册程序并收到一个密码及账号后，用户应维持密码及账号的机密安全。您应对任何人利用您的密码及账号所进行的活动负完全的责任，智炫堂公司对非法或未经您授权使用您账号及密码的行为不承担任何责任。智炫堂公司应积极地采取技术与管理等合理措施保障用户账号的安全、有效。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给用户和他人的民事权利造成损害的，应当承担由此产生的法律责任。
			在用户完成注册程序并收到一个密码及账号后，用户应维持密码及账号的机密安全。您应对任何人利用您的密码及账号所进行的活动负完全的责任，智炫堂公司对非法或未经您授权使用您账号及密码的行为不承担任何责任。智炫堂公司应积极地采取技术与管理等合理措施保障用户账号的安全、有效。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给用户和他人的民事权利造成损害的，应当承担由此产生的法律责任。
			在用户完成注册程序并收到一个密码及账号后，用户应维持密码及账号的机密安全。您应对任何人利用您的密码及账号所进行的活动负完全的责任，智炫堂公司对非法或未经您授权使用您账号及密码的行为不承担任何责任。智炫堂公司应积极地采取技术与管理等合理措施保障用户账号的安全、有效。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给用户和他人的民事权利造成损害的，应当承担由此产生的法律责任。
			
			</view>
		</view>
	</Popup>
</template>

<script>
	import Popup from './wyb-popup/wyb-popup.vue'
	export default {
		name: "clause_popup",
		components: {
			Popup
		},
		data() {
			return {

			};
		},
		mounted() {
			this.$nextTick(function() {
				this.$on('open', function() {
					this.$refs.clausePopup.show()
				});
			});
		},
		methods: {
			close() {
				this.$refs.clausePopup.hide()
			},
			open() {
				this.$refs.clausePopup.show() // 显示
			}
		}
	}
</script>

<style scoped>
	.top {
		width: 100%;
		padding: 12px 15px;
		border-bottom: 1px solid #F2F2F2;
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		z-index: 1;
		box-sizing: border-box;
	}

	.red {
		height: 24px;
		font-family: DINPro-Bold;
		font-size: 15px;
		color: #CE3C45;
		letter-spacing: -1.14px;
		font-weight: 500;
	}

	.icon {
		width: 14px;
		height: 14px;
	}

	.contain_box {
		width: 100%;
		margin-top: 50px;
	}
	.contain{
		width: calc(100% - 25px);
		padding: 12px 0;
		font-size: 14px;
		color: #545557;
	}
</style>
