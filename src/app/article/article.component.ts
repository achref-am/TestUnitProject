import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent {
  
  @Input()
  Des_Article!: string;

  @Input()
  Prix_Article!: string;
  @Input()
  Qte_Article!: string;

  getQteArticle()
{
  return this.Qte_Article;
}
getColor()
{
  if (this.Qte_Article ==="")
  {
    return 'red';
  }
  else
  {
    return 'green';
  }
}

}
