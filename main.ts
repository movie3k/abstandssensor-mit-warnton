let abstand = 0
basic.forever(function () {
    abstand = 100
    if (input.isGesture(Gesture.LogoUp)) {
        abstand += grove.measureInCentimeters(DigitalPin.C16)
        if (abstand < 20) {
            music.playMelody("C5 A C5 A C5 A - - ", 120)
        } else {
            basic.showIcon(IconNames.Happy)
        }
        basic.showIcon(IconNames.Sad)
        music.playMelody("B C5 B C5 B C5 B C5 ", 120)
        basic.showNumber(abstand)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
})
