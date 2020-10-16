import { Route } from '@angular/router';
import { AccueilComponent } from '../01_accueil/accueil.component';
import { RgpdComponent } from '../02_rgpd/rgpd.component';
import { InstructionsComponent } from '../03_instructions/instructions.component';
import { PrisePhotoComponent } from '../04_prise-photo/prise-photo.component';
import { ChoixRenduComponent } from '../05_choix-rendu/choix-rendu.component';
import { ImpressionPhotoComponent } from '../06_impression-photo/impression-photo.component';
import { SelectionPseudoComponent } from '../06_selection-pseudo/selection-pseudo.component';
import { SelectionPhotoMosaicComponent } from '../99_selection-photo-mosaic/selection-photo-mosaic.component';


export const visualisationMainRoute: Route[] = [
  {
    path : 'accueil',
    component : AccueilComponent,
    canActivate : []
  },
  {
    path : 'rgpd',
    component : RgpdComponent,
    canActivate : []
  },
  {
    path : 'instructions',
    component : InstructionsComponent,
    canActivate : []
  },
 
  {
    path: 'prise-photo',
    component: PrisePhotoComponent,
    canActivate: []
  },
  {
    path: 'selection-photo/:id',
    component: SelectionPhotoMosaicComponent,
    canActivate: []
  },
  {
    path: 'selection-pseudo/:id/:numero',
    component: SelectionPseudoComponent,
    canActivate: []
  },
  {
    path: 'choix-rendu/:id',
    component: ChoixRenduComponent,
    canActivate: []
  },
  {
    path: 'impression/:id',
    component: ImpressionPhotoComponent,
    canActivate: []
  }];
