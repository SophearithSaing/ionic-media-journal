import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tv-shows',
    loadChildren: () => import('./tv-shows/tv-shows.module').then( m => m.TvShowsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'musics',
    loadChildren: () => import('./musics/musics.module').then( m => m.MusicsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
