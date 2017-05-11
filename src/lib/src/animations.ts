import { animate, animation, style, AnimationReferenceMetadata } from '@angular/animations';

export const fadeIn: AnimationReferenceMetadata = animation([
  style({ opacity: 0 }),
  animate(1000, style({ opacity: 1 }))
]);

export const fadeOut: AnimationReferenceMetadata = animation([
  animate(1000, style({ opacity: 0 }))
]);
