import { animate, animation, style, AnimationMetadata, AnimationReferenceMetadata } from '@angular/animations';

import * as md from './variables/material';

/** Fade In Animation */
export const fadeIn: AnimationReferenceMetadata = animation([

  style({ opacity: 0 }),
  animate('{{ durat }}', style({ opacity: 1 }))

], { delay: '5000ms', params: { durat: '1000ms' } });

/** Fade Out Animation */
// export const fadeOut: AnimationMetadata = animation([

//   animate('$duration', style({ opacity: 0 }))

// ], { params: { '$duration': md.DURATION_LEAVE } });

// /** from Left Animation */
// export const fromLeft: AnimationMetadata = animation([

//   style({ width: 0, overflow: 'hidden' }),
//   animate('$duration', style({ width: '*' }))

// ], { params: { '$duration': md.DURATION_LEAVE } })
