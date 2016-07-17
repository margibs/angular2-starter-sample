import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  moduleId: module.id,
  selector: 'app-authors',
  templateUrl: 'authors.component.html',
  styleUrls: ['authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {
  title = "The title of authors page";
  authors: string[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
  }

}
