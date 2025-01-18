import {
	EventsSDK,
	NotificationsSDK
} from "github.com/octarine-public/wrapper/index"

NotificationsSDK.Push()

console.log("Hello world!")
EventsSDK.on("GameStarted", () => {
	console.log("Hello world!")
})
