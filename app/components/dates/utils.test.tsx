import { 
	checkLimitCapacityActions, 
	findLimitCapacityActions, 
	checkCapacityConditions,
	filterHide
} from "./utils";
import {triggers} from "../../tests/mocks/inventory-triggers"


describe("findActionsByName", () => {
	it ("returns an empty array if there are no triggers", () => {
		const result = findLimitCapacityActions([], 'hide')
		expect(result.length).toEqual(0)
	})

	it ("returns an empty array if there are no limitCapacity actions", () => {
		const result = findLimitCapacityActions(triggers, 'limitCapacity')
		expect(result.length).toEqual(102)
		expect(triggers.length).toEqual(107)
	})
})

describe("findLimitCapacityActions", () => {
	it ("returns an empty array if there are no triggers", () => {
		const result = findLimitCapacityActions([])
		expect(result.length).toEqual(0)
	})

	it ("returns an empty array if there are no limitCapacity actions", () => {
		const result = findLimitCapacityActions(triggers)
		expect(result.length).toEqual(102)
		expect(triggers.length).toEqual(107)
	})
})

describe("checkLimitCapacityActions", () => {
	it ("changes the inventory if a match is found", () => {
		const item = {
			date: "2023-09-15",
			time: "11:30",
			quantity: 0,
			sold: 0,
			remaining: 20
		}

		const result = checkLimitCapacityActions(item, triggers)
		expect(result.quantity).toEqual(15)


	})
})

describe("checkCapacityConditions", () => {
	it ("returns an empty array if no match is found", () => {
		const item = {
			date: "2021-09-15",
			time: "11:30",
			quantity: 0,
			sold: 0,
			remaining: 20
		}

		const result = checkCapacityConditions(item, triggers)
		expect(result.length).toEqual(0)
	})
	it("returns an array of matching triggers", () => {
		const item = {
			date: "2023-09-15",
			time: "11:30",
			quantity: 0,
			sold: 0,
			remaining: 20
		}
		const result = checkCapacityConditions(item, findLimitCapacityActions(triggers))
		expect(result.length).toEqual(1)
	})
})

describe("filterHide", () => {
	it("returns false if there are no triggers", () => {
		const result = filterHide({}, [])
	})
		it("returns false if there is not a match", () => {
		const item = {
			date: "2021-09-14",
			time: "09:40",
			quantity: 0,
			sold: 0,
		}
		const result = filterHide(item, triggers)
		expect(result).toEqual(false)

	})

	it("returns true if there is a match", () => {
		const item = {
			date: "2023-09-14",
			time: "09:40",
			quantity: 0,
			sold: 0,
		}
		const result = filterHide(item, triggers)
		expect(result).toEqual(true)

	})
})
