<template>
	<div id="app">
		{{ formattedDate }}
	</div>
</template>

<script>
export default {
	name: "SimpleTimeago",
	props: {
		date: {
			// Required date to calculate timeago
			type: [String, Number],
			required: true,
      default: new Date()
		},
		initialUpper: {
			// Set initial letter to uppercase
			type: Boolean,
			default: true,
		},
		locale: {
			type: String,
			default: undefined,
		},
	},
	data() {
		return {
			dateUnits: {
				day: 86400,
				hour: 3600,
				minute: 60,
				second: 1,
			},
			formattedDate: this.date,
		};
	},
	methods: {
		getSecondsDiff(timestamp) {
			return (Date.now() - timestamp) / 1000;
		},
		getUnitAndValueDate(secondsElapsed) {
			for (const [unit, secondsInUnit] of Object.entries(this.dateUnits)) {
				if (secondsElapsed >= secondsInUnit || unit === "second") {
					const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
					return { value, unit };
				}
			}
		},
		getTimeAgo() {
			try {
				const givenDate = typeof this.date === "string" ? Date.parse(this.date) : this.date;
				const rtf = new Intl.RelativeTimeFormat(this.lang);
				const secondsElapsed = this.getSecondsDiff(givenDate);
				const { value, unit } = this.getUnitAndValueDate(secondsElapsed);
				this.formattedDate = rtf.format(value, unit);
			} catch (error) {
				console.error("ERROR GENERATING TIMEAGO", error);
			}
		},
	},
	created() {
		this.getTimeAgo();
	},
};
</script>

<style lang="scss" scoped>

</style>
