export const triggers = [
	{
		"conditions": [
			{ "path": "tickets.events.september6th2023", "name": "isSelected" }
		],
		"actions": [{ "paths": ["tickets.adult"], "name": "show" }],
		"created": "2023-07-17T20:49:24.728Z",
		"all": true
	},
	{
		"conditions": [
			{ "path": "tickets.events.september6th2023", "name": "isSelected" }
		],
		"actions": [{ "paths": ["tickets.generalAdmission"], "name": "hide" }],
		"created": "2023-07-17T20:49:24.728Z",
		"all": true
	},
	{
		"conditions": [
			{ "path": "tickets.events.september9th2023", "name": "isSelected" }
		],
		"actions": [{ "paths": ["tickets.generalAdmission"], "name": "show" }],
		"created": "2023-07-18T20:25:14.327Z"
	},
	{
		"conditions": [
			{ "path": "tickets.events.september7th2023", "name": "isSelected" }
		],
		"actions": [{ "paths": ["tickets.adult"], "name": "show" }],
		"created": "2023-07-18T20:28:18.155Z"
	},
	{
		"conditions": [
			{ "path": "tickets.events.september8th2023", "name": "isSelected" }
		],
		"actions": [{ "paths": ["tickets.adult"], "name": "show" }],
		"created": "2023-07-18T20:29:40.882Z"
	}
]