function setStarfield () {
    background2 = image.create(scene.screenWidth(), scene.screenHeight() * 2)
    background2.fill(0)
    for (let index = 0; index < 100; index++) {
        background2.setPixel(randint(0, 159), randint(0, 239), 1)
    }
    scroller.setLayerImage(scroller.BackgroundLayer.Layer2, background2)
    background1 = image.create(scene.screenWidth(), scene.screenHeight() * 2)
    background1.fill(0)
    for (let index = 0; index < 50; index++) {
        background1.setPixel(randint(0, 159), randint(0, 239), 9)
    }
    scroller.setLayerImage(scroller.BackgroundLayer.Layer1, background1)
    background0 = image.create(scene.screenWidth(), scene.screenHeight() * 2)
    background0.fill(0)
    for (let index = 0; index < 20; index++) {
        background0.setPixel(randint(0, 159), randint(0, 239), 10)
    }
    scroller.setLayerImage(scroller.BackgroundLayer.Layer0, background0)
    scroller.scrollBackgroundWithSpeed(0, 10, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(0, 20, scroller.BackgroundLayer.Layer1)
    scroller.scrollBackgroundWithSpeed(0, 50, scroller.BackgroundLayer.Layer2)
}
let background0: Image = null
let background1: Image = null
let background2: Image = null
setStarfield()
