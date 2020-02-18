import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss']
})
export class PostsCreateComponent implements OnInit {
  enteredValue = '';
  newPost = 'NO CONTENT';

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost() {
    this.newPost = this.enteredValue;
  }

}
