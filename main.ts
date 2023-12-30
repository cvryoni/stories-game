input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("F G A B C5 A F G ", 230), music.PlaybackMode.UntilDone)
    Category = randint(0, 3)
    for (let index = 0; index < 2; index++) {
        basic.showString("" + (Messages[Category]))
    }
})
let Category = 0
let Messages: string[] = []
basic.showString("Hi!")
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
Messages = [
"Action",
"Fantasy",
"Comedy",
"Horror"
]
