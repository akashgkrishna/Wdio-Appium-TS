import { SwipeCordinates } from "../customTypes/swipeCordinates";

export class TouchActions {

    private static readonly SWIPE_PERCENTAGES = {
        START_SWIPE_Y: 0.5,
        END_SWIPE_Y: 0.2,
    };
  
    private static readonly PAUSE_DURATION = 500;

    public static async swipeUpFromMiddle(): Promise<void> {
        const windowSize = await driver.getWindowRect();
        const swipeCordinates = {
            startY: windowSize.height * this.SWIPE_PERCENTAGES.START_SWIPE_Y,
            startX: windowSize.width / 2,
            endY: windowSize.height * this.SWIPE_PERCENTAGES.END_SWIPE_Y,
          };
  
      await TouchActions.performSwipe(swipeCordinates);
    }
  
    private static async performSwipe(swipeCordinates: SwipeCordinates): Promise<void> {
      await browser
        .action('pointer', { parameters: { 'pointerType': 'touch' } })
        .move({ x: swipeCordinates.startX, y: swipeCordinates.startY })
        .down()
        .pause(this.PAUSE_DURATION)
        .move({ x: swipeCordinates.startX, y: swipeCordinates.endY })
        .up()
        .perform();
    }

    // TODO need to remove this later
    // public static async doubleTapOnElement(locator: string): Promise<void> {
    //   const element = $(locator)
    //   const xLocation = await element.getLocation('x');
    //   const yLocation = await element.getLocation('y')
      
    //   await browser
    //     .action('pointer', { parameters: { 'pointerType': 'touch' } })
    //     .move({ x: xLocation, y: yLocation })
    //     .down()
    //     .up()
    //     .pause(500)
    //     .down()
    //     .up()
    //     .perform();
    // }
}
