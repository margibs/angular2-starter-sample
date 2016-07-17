import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { VoteComponent } from './vote/vote.component';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { ZippyComponent } from './zippy/zippy.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent,VoteComponent,BootstrapPanelComponent,ZippyComponent],
  pipes: [SummaryPipe]
})

export class AppComponent {
  title = 'app works!';
  imageUrl = "http://lorempixel.com/400/200";
 
  zippies = [
    {
      'title' : 'Who can see my stuff?',
      'content': 'Content of who can see my stuff'
    },
    {
      'title' : 'Who can contact me?',
      'content': 'Content of who can contact me'
    }
  ]; 

  post = {
    title: "Angular Tutorial for Beginners",
    isFavorite: true,
    isLike: false,
    isLikeCounter: 10,
    voteCount : 10,
    myVote: 0,
    body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id aliquet leo. Donec nec libero non neque auctor finibus ac ac ligula. Sed finibus tortor quis hendrerit fermentum. Sed tempus pellentesque facilisis. Aliquam malesuada facilisis tincidunt. Donec euismod finibus velit sed tincidunt. Donec a mattis ipsum.`
  };

  constructor(){

  }

  onClick($event){
    $event.stopPropagation();
    console.log("Clicked",$event);
  }

  onDivClick(){
    console.log("Handled by Div");
  }

  onFavoriteChange($event){
    console.log($event);
  }

  onVote($event){
    console.log($event);
  }


}
