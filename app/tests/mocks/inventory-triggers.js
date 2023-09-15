export const triggers = [
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-14T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"12:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "4"
					}
			],
			"created": "2023-09-11T03:28:10.692Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-14T06:00:00.000Z"
					}
			],
			"actions": [
					{
							"paths": [
									"tickets.timeslot.09:00",
									"tickets.timeslot.09:40",
									"tickets.timeslot.11:40",
									"tickets.timeslot.14:20",
									"tickets.timeslot.14:30",
									"tickets.timeslot.15:20"
							],
							"name": "hide"
					}
			],
			"created": "2023-09-14T15:43:18.735Z"
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-14T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "4"
					}
			],
			"created": "2023-09-11T03:28:10.692Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-14T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00",
									"12:30",
									"13:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-11T03:28:10.692Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-14T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "1"
					}
			],
			"created": "2023-09-11T03:28:10.692Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-14T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"14:00",
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "14"
					}
			],
			"created": "2023-09-11T03:28:10.692Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-14T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "12"
					}
			],
			"created": "2023-09-11T03:28:10.692Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-15T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"13:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-11T03:28:10.692Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-15T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "15"
					}
			],
			"created": "2023-09-11T03:28:10.692Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-16T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "8"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-16T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"13:30",
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-16T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00",
									"15:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "14"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-16T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"12:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "10"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-16T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:00",
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-16T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-17T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "9"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-17T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "13"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-17T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:30",
									"12:00",
									"12:30",
									"14:00",
									"14:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-17T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-18T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"14:00",
									"15:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-18T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "15"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-18T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00",
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-19T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "14"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-19T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-20T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"10:30",
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-21T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00",
									"13:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "15"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-21T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "13"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-22T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"14:00",
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-22T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"13:00",
									"14:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-22T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:30",
									"12:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "15"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-23T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "7"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-23T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "5"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-23T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-23T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:30",
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-23T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-24T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"15:00",
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-24T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "15"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-25T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "19"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-26T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"12:00",
									"14:30",
									"15:00",
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-27T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00",
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-27T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "2"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-28T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"12:30",
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-28T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"12:00",
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-28T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "12"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-28T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-29T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "7"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-29T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-29T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "14"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-29T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-30T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"11:00",
									"12:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-09-30T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-01T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00",
									"10:00",
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-01T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "15"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-01T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "13"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-02T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-02T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-05T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "19"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-05T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:00",
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-05T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-06T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"10:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-06T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "7"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-07T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"14:30",
									"15:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-07T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "12"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-07T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-07T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "14"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-08T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00",
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-08T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "13"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-09T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"13:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-09T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-10T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "15"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-10T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-10T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"11:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-11T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-11T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-12T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"14:00",
									"15:00",
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-12T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:00",
									"13:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "9"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-13T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"13:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-13T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"12:00",
									"15:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-14T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"14:00",
									"11:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-14T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "12"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-15T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-15T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-16T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00",
									"12:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-16T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:00",
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "0"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-16T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-17T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "15"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-19T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-20T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "19"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-21T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "12"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-22T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-25T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-29T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-31T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"13:00",
									"13:30",
									"15:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-31T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "14"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-11-19T07:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-11-23T07:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:30",
									"12:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-12-05T07:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"14:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-12-30T07:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-12-30T07:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-10-25T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"15:30"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "16"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-11-01T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"10:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-11-03T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"11:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "17"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dateIs",
							"value": "2023-11-04T06:00:00.000Z"
					},
					{
							"path": "tickets.timeslot",
							"name": "selectionIs",
							"value": [
									"16:00"
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets"
							],
							"name": "limitCapacity",
							"value": "18"
					}
			],
			"created": "2023-09-03T20:22:49.171Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dayIs",
							"value": [
									1
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets.timeslot",
									"tickets.timeslot.10:30",
									"tickets.timeslot.11:30",
									"tickets.timeslot.12:30",
									"tickets.timeslot.14:20",
									"tickets.timeslot.15:30"
							],
							"name": "hide"
					}
			],
			"created": "2023-09-03T21:05:48.181Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dayIs",
							"value": [
									2,
									3,
									4
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets.timeslot",
									"tickets.timeslot.14:20",
									"tickets.timeslot.15:30",
									"tickets.timeslot.09:00",
									"tickets.timeslot.09:40",
									"tickets.timeslot.13:30",
									"tickets.timeslot.15:20",
									"tickets.timeslot.11:30",
									"tickets.timeslot.11:40"
							],
							"name": "hide"
					}
			],
			"created": "2023-09-03T21:05:48.181Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dayIs",
							"value": [
									5
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets.timeslot",
									"tickets.timeslot.14:20",
									"tickets.timeslot.09:00",
									"tickets.timeslot.13:30",
									"tickets.timeslot.15:20",
									"tickets.timeslot.09:40",
									"tickets.timeslot.14:30",
									"tickets.timeslot.10:30"
							],
							"name": "hide"
					}
			],
			"created": "2023-09-03T21:05:48.181Z",
			"all": true
	},
	{
			"conditions": [
					{
							"path": "tickets.date",
							"name": "dayIs",
							"value": [
									6,
									0
							]
					}
			],
			"actions": [
					{
							"paths": [
									"tickets.timeslot",
									"tickets.timeslot.14:20",
									"tickets.timeslot.09:00",
									"tickets.timeslot.13:30",
									"tickets.timeslot.15:20",
									"tickets.timeslot.09:40"
							],
							"name": "hide"
					}
			],
			"created": "2023-09-03T21:05:48.181Z",
			"all": true
	}
]