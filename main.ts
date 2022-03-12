input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Sad)
    PerusRuutu()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    PerusRuutu()
})
function PerusRuutu () {
    basic.showIcon(IconNames.Asleep)
}
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Silly)
    basic.showLeds(`
        . . . . .
        # . # # .
        . # # # #
        # . # # .
        . . . . .
        `)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1500)
    PerusRuutu()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Surprised)
    PerusRuutu()
})
PerusRuutu()
