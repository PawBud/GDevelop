describe('gdjs.Polygon', function() {
  it('benchmark gdjs.Polygon.collisionTest between two polygons', function() {
    this.timeout(20000);
    var rect1 = gdjs.Polygon.createRectangle(32, 40);
    var rect2 = gdjs.Polygon.createRectangle(32, 40);
    var rect3 = gdjs.Polygon.createRectangle(32, 40);
    rect2.move(20, 20);
    rect3.move(50, 50);

    const benchmarkSuite = makeBenchmarkSuite({
      benchmarksCount: 60,
      iterationsCount: 60000,
    });
    benchmarkSuite
      .add('collisionTest between two overlapping rectangles', i => {
        gdjs.Polygon.collisionTest(rect1, rect2);
      })
      .add('collisionTest between two non overlapping rectangles', i => {
        gdjs.Polygon.collisionTest(rect1, rect3);
      });

    console.log(benchmarkSuite.run());
  });
});
