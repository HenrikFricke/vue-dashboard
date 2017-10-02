export function plugins(state) {
  return state.plugins;
}

export function cards(state) {
  const p = plugins(state);

  return state.cards.map((card) => {
    const correspondingPlugin = p.filter(plugin => plugin.ID === card.id)[0];

    return {
      ...card,
      component: correspondingPlugin.component,
    };
  });
}

export function randomCardBackgroundColor(state) {
  const colors = state.cardBackgroundColors;
  const index = Math.floor((colors.length - 1) * Math.random());

  return colors[index];
}
