function revealSantaRoute(routes: string[][]): string[] {
  // Code here
  const newRoute: string[] = [];

  newRoute.push(...routes[0]); // Get first leg
  let currentDestination: string = routes[0][1];

  // Create Route Map
  const routeMap = new Map<string, string>();
  for (let i = 1; i < routes.length; i++) {
    routeMap.set(routes[i][0], routes[i][1]);
  }

  // Iterate routeMap
  while (routeMap.has(currentDestination)) {
    const nextStop = routeMap.get(currentDestination)!;
    newRoute.push(nextStop);
    currentDestination = nextStop;
  }

  return newRoute;
}

export default revealSantaRoute;
