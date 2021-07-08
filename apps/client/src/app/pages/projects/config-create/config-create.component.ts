import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

enum ConfigurationType {
	JSON = 'json',
	Angular = 'angular',
	DotNET = 'dotnet',
	ENV = 'env',
}

@Component({
	selector: 'cat-config-create',
	templateUrl: './config-create.component.html',
	styleUrls: ['./config-create.component.scss']
})
export class ConfigCreateComponent {
	configTypes: ConfigurationType[] = [ConfigurationType.Angular, ConfigurationType.DotNET, ConfigurationType.JSON];

	configurationForm = new FormGroup({
		name: new FormControl('', Validators.required),
		type: new FormControl(0, Validators.required)
	});

	onSubmit() {
		console.warn(this.configurationForm.value);
	}
}
