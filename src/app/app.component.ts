import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { EmployeesListComponent } from './employees-list/employees-list.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		EmployeesListComponent,
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
	],
	styles: [
		`
			@import '@angular/material/prebuilt-themes/indigo-pink.css';

			main {
				display: flex;
				justify-content: center;
				padding: 2rem 4rem;
			}
		`,
	],
	template: `
		<mat-toolbar>
			<span>Employees Management System</span>
		</mat-toolbar>
		<main>
			<router-outlet></router-outlet>
		</main>
	`,
})
export class AppComponent {
	title = 'client'
}
