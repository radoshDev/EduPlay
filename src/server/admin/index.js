import { initializeApp, cert } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { createInterface } from "readline"

const readline = createInterface({
	input: process.stdin,
	output: process.stdout,
})

const app = initializeApp({
	credential: cert({
		clientEmail:
			"firebase-adminsdk-4i6sy@eduplay-6b78a.iam.gserviceaccount.com",
		privateKey:
			"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC+EGj0kOg7UDqC\ncETJxWA6Oy3WbUl5kJALNJKI2reYr/pjAxpGeOz3yCaZ5qqhBWMPptJW40shqrvd\nk54LBrbyxN9V3rEq4fsao3g2UrJHKMhC+zetvWBodp2y7HmFKzUQGIdrFLc2uyLb\no+jVH7lqVl3GrWSW17QJCRxvOObqYgxZ4tiEPKayleflJGvlGhIhSB0v7dewNdy9\nSoRdtZr6nsaVUpJ7idO8B5QIc5xYTMNWW2leTx60Ayg2Hy3BAOKjgMfyLMuAc0BB\n1x+wMe5YxZGdly1qruRAbTNlKwepAjnsslf+RIdwl9cV3+gMPxhFTPNiTd7QuJN1\nLwR4EtJXAgMBAAECggEABFA8XDXgWghAwQO/QT0Dfrl9GX1ddNl9C2QOt0sPbkhV\ndw3I+N8hsaCPOmBBGxUTjHViwf9ijcm20xkt4F4vT2R8amclai26vyiv6mZcuWoJ\nhsugwIaoZiEwWbEtiNd+2stTt3BplV+7M3Ti1y4NzTCsltJfPV/OgYNSwTYaDNOm\nz1kv4wCopS3MJkusBPuMBpgwN8bnOEnDdMcmdLixJWW5/tmR/4W6JttHD+qr6WyD\nrWohBrCayAgeKrVYPydOeU2ZsCY4ydHqBrATRTlKTQDLdK6YixWG2H45hSYVMNz9\nIpTRtGXThCT16wwd/shYd4n1KioUDh+i6cibvUfisQKBgQDgCEV8j3CoIQ9OoShY\narO7snN/MmUlu0zqQSVHlpS3GQ+B0O6uIFjzwMc7B4pgYydmNfsnhJni1rS/32Wc\nAisXH2PEhBhrO1w1B51XqqcbxOHGfbZwAyCCgDKcBRnObR0SdAqHGlf09CH9Zkf4\n1iSl8nU/UnA70l7TZvkr8U5SHQKBgQDZL05QywzFrphioU3zd0Lv0zJ0dUBZDWlH\nMImobrDOLbdOE8FDwI9AuixlTi50vaZhCkNhQ8wo0l2FHNyh1seECeUwzE1byZ3I\ndLqmLWCtdsj6fYCZxfsPITwyDAa5IOYSi/DcRTICQStBEkUFxr2EIRWLpm3V6Acv\nAC3H6ECMAwKBgBeMpwk95sC1oO9J/3yz0qrTSlK/kGRT+PTS3kFVMdLBXqDtvnkt\nS0xsIkUxOLmDErwqxnjT9n0ixqM4r2yjybXHhew9WnfDKKEmaMKzXJeNrZH42vmR\nSpSNN0SxQJIzZA/xhL3I5iAInZ4OZ1hf4kBTaUG7v7J6HZ+pPl4BIpN9AoGBAIcE\nF6W2dVw3bFh0eudOTviUzRsFAVnbMoWlMQ7asWObnAcX1N/vx56vnoXkEpFUjShq\nnvTKlxMRpD3qcWbTBPmaxTaO69CSCFrj5l0EfMOZwtumRdpS7/655JggTdWtFBqX\nkMb+5VXteZxcZThwEsUfZCuK7WE7e6vGaq+KPQZNAoGBALcyp1GBaUF1aeNakncT\nlqRPPQiQ61fl0oCdjd7A/4A+FIF/7Yv2TIH0ZHOuz14k2LX2J/2OIfRkIGrX0p7C\n9vEl+6wKW9UQd1LRgIEIHGSlSKD1wTAULdUMASVuy0q6zN3xZC5ApWdF+4YmGhGJ\nFy1pNhYpf3A+uBGEj529Ihbm\n-----END PRIVATE KEY-----\n",
		projectId: "eduplay-6b78a",
	}),
	databaseURL: "https://eduplay-6b78a.firebaseio.com",
})

export const auth = getAuth(app)

readline.question("Enter firebase userId ('uid') > ", async uid => {
	try {
		await auth.setCustomUserClaims(uid, { admin: true })
		console.log(
			`Success! The user with ID: ${uid} has now been granted admin rights.`
		)
	} catch (error) {
		console.log(`The user with ID: ${uid} is now an admin.`)
	} finally {
		readline.close()
	}
})
