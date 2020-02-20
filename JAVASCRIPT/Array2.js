var data = {
	name: "Mrx",
	job: "developer",
	age:"29",
	showData: function(){
		return `

			\nName:${this.name}\nJob:${this.job}\nAge:${this.age}

		`
	}
}

console.log(data.showData())