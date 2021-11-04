import { NgModule } from '@angular/core';
import { PreloadAllModules,  RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'search-location',
    loadChildren: () => import('./pages/search-location/search-location.module').then( m => m.SearchLocationPageModule)
  },
  {
    path: 'search-results',
    loadChildren: () => import('./pages/search-results/search-results.module').then( m => m.SearchResultsPageModule)
  },
  {
    path: 'property-list',
    loadChildren: () => import('./pages/property-list/property-list.module').then( m => m.PropertyListPageModule)
  },
 
  {
    //Here we will have the paths we will add the access routes we need
    //locations/id
    path: 'search-results/:destId',
    loadChildren: () => import('./pages/search-results/search-results.module').then( m => m.SearchResultsPageModule)
  },
  {
    path: 'property-info',
    loadChildren: () => import('./pages/property-info/property-info.module').then( m => m.PropertyInfoPageModule)
  },
  {
    path: 'property-info/:propId',
    loadChildren: () => import('./pages/property-info/property-info.module').then( m => m.PropertyInfoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }

  //we will have more down here of course

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
