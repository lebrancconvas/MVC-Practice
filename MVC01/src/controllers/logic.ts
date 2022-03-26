import fs from 'fs';

class BusinessLogic {
	readFile(path: string): string {
		const output = fs.readFileSync(path).toString('utf-8');
		return output;
	}

	display(fileExtension: string, fileName: string) {
		let result;
		switch(fileExtension) {
			case 'json':
				result = this.readFile(`./models/data/${fileExtension}/${fileName}.json`);
				break;
			case 'text':
				result = this.readFile(`./models/data/${fileExtension}/${fileName}.txt`);
				break;
			case 'xml':
				result = this.readFile(`./models/data/${fileExtension}/${fileName}.xml`);
				break;
			case 'csv':
				result = this.readFile(`./models/data/${fileExtension}/${fileName}.csv`);
				break;
		}
		return result;
	}

	arrayManagement() {
		let time: string[] = [];
		let cpucore: string[] = [];
		const data = this.display('text', 'example01');
		const cpudata = data!.split('\n');

		for(let i = 0; i < cpudata.length; i++) {
			let cpuproperty = cpudata[i].split(',');
			cpucore.push(cpuproperty[1]);
			time.push(cpuproperty[2]);
		}

		let timenumber = time.map(x => parseFloat(x));
		let cpucorenumber = cpucore.map(x => parseInt(x));
		
		let newtimenumber = [];

		for(let i = 0; i < timenumber.length; i++) {
			let multiplier = Math.floor(timenumber[i] / 5);
			let newTime = timenumber[i] % 5 === 0 ? 5 * multiplier : 5 * (multiplier + 1);
			newtimenumber.push(newTime);
		}

		let cpuobject = [];

		for(let i = 0; i < cpudata.length; i++) {
			let object = {
				id: i + 1,
				cpu: cpucorenumber[i],
				time: newtimenumber[i]
			}
			cpuobject.push(object);
		}

		return cpuobject;
	}
}

export default BusinessLogic;


