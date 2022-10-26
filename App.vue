<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '@/static/default.css';

	input,
	picker {
		font-family: 'PingFangSC-Regular';
		font-weight: normal;
		font-size: 14px;
	}

	.contain {
		width: 100vw;
		height: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	}

	.contain-box {
		width: calc(100% - 30px);
		padding: 10px 15px;
		background: #fff;
		border-radius: 8px;
		box-sizing: border-box;

		font-family: SourceHanSansCN-Medium;
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0em;
		color: #3D3D3D;
	}

	.contain-title {
		opacity: .9;
	}

	.contain_list {
		margin: 8px 0 10px 0;
		font-family: PingFangSC-Semibold;
		font-size: 14px;
		font-weight: 500;
		color: #3d3d3d;
	}

	.contain_line {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		;
	}

	.price_list {
		font-size: 14px;
		font-weight: 500;
		color: #CE3C45;
		margin: 2px 0;
	}

	.price_list .label {
		width: 40%;
	}

	.back_button {
		width: 30%;
		height: 35px;
		font-size: 15px;
		color: #3d3d3d;
		border-radius: 3px;
		background: #FFFFFF;
		letter-spacing: 3px;
	}

	.default-button {
		width: 60%;
		height: 35px;
		border-radius: 3px;
		background: #C92D41;
		color: #fff;
	}
</style>
