import { showModal } from './modal';
import App from '../../app';
import { createFighterImage } from '../fighterPreview';

export function showWinnerModal(fighter) {
  // call showModal function 
  const bodyElement = createFighterImage(fighter);
  showModal({ 
    title: `Great!!!, the best player is ${fighter.name}`,
    bodyElement,
    onClose: () => {
      App.rootElement.innerHTML = '';
      App.startApp();
    }
   });
}
