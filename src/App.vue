<template>
  <div id="app">
    {{ formattedDate }}
  </div>
</template>

<script>

export default {
  name: 'App',
  props: {
		date: { // Required date to calculate timeago
			type: [String, Number],
			required: true
		},
		initialUpper: { // Set initial letter to uppercase
			type: Boolean,
			default: true
		}
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
        const givenDate = typeof this.date === "string" ? Date.parse(this.date) : this.date
        const rtf = new Intl.RelativeTimeFormat();
        const secondsElapsed = this.getSecondsDiff(givenDate);
        const { value, unit } = this.getUnitAndValueDate(secondsElapsed);
        this.formattedDate = rtf.format(value, unit);        
      } catch (error) {
        console.error("ERROR GENERATING TIMEAGO", error)        
      }
		},
	},
	created() {
		this.getTimeAgo();
	},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
