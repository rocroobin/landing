  // снег
  const maxCount = 50;
  let snow = new Array(maxCount);
  snow = snow.fill(true);
  snow = snow.map(() => new SnowFlake());

  // взаимодействие
  setInterval(() => snow.forEach(snowFlake => snowFlake.move()), 20);

  document.addEventListener('click', event => {
      const newSnowFlake = new SnowFlake();
      newSnowFlake.x = event.clientX;
      newSnowFlake.y = event.clientY;
      newSnowFlake.speed = 10;
      engine.objects.push(newSnowFlake);
      snow.push(newSnowFlake);
  });

  // использование движка
  const engine = new Engine();
  engine.objects.push(...snow);