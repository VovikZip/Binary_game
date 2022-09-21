import { createElement } from '../helpers/domHelper';
import { fighters } from '../helpers/mockData';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  if (fighter) {
        console.log(fighter);
        const fighterImage = createFighterImage(fighter);

  // todo: show fighter info (image, name, health, etc.)

  const infoBlock = createElement({
          tagName: 'div',
          className: 'fighter-preview___block'
        });
    
        for (const key in fighter) {
          if (key !== '_id' && key !== 'source') {
            const infoElement = createElement({
              tagName: 'p',
              className: `fighter-preview___item`
            });
            infoElement.innerText = `${key.toUpperCase()}: ${fighter[key]}`;
            infoBlock.append(infoElement);
          }
        }
        fighterElement.append(fighterImage);
        fighterElement.append(infoBlock);
      }

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
