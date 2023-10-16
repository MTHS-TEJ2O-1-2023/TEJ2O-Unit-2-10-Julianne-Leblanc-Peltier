/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Oct 2023
 * This program reads the amount of light
*/

// variables
let amountOfLight: number = 0
let neopixelStrip: neopixel.Strip = null

// screen setup
basic.clearScreen()
amountOfLight = input.lightLevel()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// depending on light level, turns on neopixels
input.onButtonPressed(Button.A, function () {
  amountOfLight = input.lightLevel()
  // if light level is less than 51, none (0) neopixels turn on
  if (amountOfLight <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }

  // if light level is equal to or more than 52, 1 neopixel turns on
  if (amountOfLight >= 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    }

  // if light level is equal to or more than 104, 2 neopixels turn on
  if (amountOfLight >= 104) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    }

  // if light level is equal to or more than 156, 3 neopixels turn on
  if (amountOfLight >= 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    }

  // if light level is equal to or more than 208, all (4) neopixels turn on
  if (amountOfLight >= 208) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    }
})

// turns off lights
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showIcon(IconNames.Happy)
})
