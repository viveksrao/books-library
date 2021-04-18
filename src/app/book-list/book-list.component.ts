import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vsr-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  pageTitle: string = 'Book List';
  imageBorder: string = '1px solid #212529';
  imagePadding: number = 4;
  showImage: boolean = false;
  listFilter: string = 'Drupal 9';
  books: any[] = [
    {
      bookId: 1,
      bookName: 'Drupal 9 Module Development - Third Edition',
      bookCode: 'DRU-9781800204621',
      releaseDate: 'August 1, 2020',
      shortDescription:
        'Build and extend flexible Drupal sites and applications with this up-to-date, expert guide to Drupal 9 module development',
      longDescription:
        'With its latest release, Drupal 9, the popular open source CMS platform has been updated with new functionalities for building complex Drupal apps with ease. This third edition of the Drupal Module Development guide covers these new Drupal features, helping you to stay on top of code deprecations and the changing architecture with every release.The book starts by introducing you to the Drupal 9 architecture and its subsystems before showing you how to create your first module with basic functionality. You’ll explore the Drupal logging and mailing systems, learn how to output data using the theme layer, and work with menus and links programmatically. Once you’ve understood the different kinds of data storage, this Drupal guide will demonstrate how to create custom entities and field types and leverage the Database API for lower-level database queries. You’ll also learn how to introduce JavaScript into your module, work with various file systems, and ensure that your code works on multilingual sites. Finally, you’ll work with Views, create automated tests for your functionality, and write secure code. By the end of the book, you’ll have learned how to develop custom modules that can provide solutions to complex business problems, and who knows, maybe you’ll even contribute to the Drupal community!',
      price: 27.99,
      starRating: 3,
      imageUrl: 'assets/images/D9ModuleDevelopment.png',
      extURL:
        'https://www.packtpub.com/product/drupal-9-module-development-third-edition/9781800204621',
    },
    {
      bookId: 2,
      bookName: 'Mastering Drupal 8 Development',
      bookCode: 'DRU-9781787124493',
      releaseDate: 'November 1, 2017',
      shortDescription:
        'Build a fully featured, multilingual, responsive web application with Drupal 8',
      longDescription:
        'Drupal is one of the most popular web content management systems on the planet and offers an incredible array of features and functionality. Small non-profits and businesses to multi-billion dollar multinational companies are all using Drupal as the core of their presence on the web. This video course will take you step by step through the process of first building a fully-featured, multilingual website using only Drupal 8 core components and no custom coding. You will also learn to use the Views module (now part of core!) and other contributed modules to add a bit of customization to the site. With the “code-free” elements in place, you will take your skills to the next level and begin to develop custom modules that alter the existing functionality of other modules. You’ll also create a new functionality of your own, including providing REST web services. We’ll finish by taking a brief look at how to create a mobile-friendly theme that ensures anybody on any device can take advantage of the amazing site we’ve built.',
      price: 124.99,
      starRating: 3.8,
      imageUrl: 'assets/images/MasteringD8Development.png',
      extURL:
        'https://www.packtpub.com/product/mastering-drupal-8-development-video/9781787124493',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }
}
